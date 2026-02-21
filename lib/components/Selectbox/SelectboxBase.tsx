import React, { Fragment } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { HiChevronUpDown as ChevronUpDownIcon } from "react-icons/hi2";
import { FiCheck as CheckIcon } from "react-icons/fi";
import {
  offset,
  flip,
  shift,
  autoUpdate,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  useFloating,
} from "@floating-ui/react";
import { twMerge } from "tailwind-merge";
//helpers
import { getValue } from "./helper";

export type ValueCallback<ListOption extends SelectOption> = (
  option: ListOption,
) => string;

export type ValueField<ListOption extends SelectOption> =
  | ValueCallback<ListOption>
  | "id"
  | "value"
  | "label"
  | string;

export type SelectOption = {
  id: string;
  label: string;
  value: string;
  enable: boolean;
};

export type Action<ListOption extends SelectOption> =
  | {
      type: "SETVALUE";
      value: string;
    }
  | {
      type: "SETSELECT";
      selected: ListOption;
    };

type State<ListOption extends SelectOption> = {
  list: ListOption[];
  value: string;
  valueField: ValueField<ListOption>;
  selected: ListOption | null;
};

const reducer = <ListOption extends SelectOption>(
  state: State<ListOption>,
  action: Action<ListOption>,
): State<ListOption> => {
  if (action.type === "SETVALUE") {
    return {
      ...state,
      value: action.value,
      selected:
        state.list.find((opt: ListOption) => {
          const v = getValue<ListOption>(opt, state.valueField);
          return v === action.value;
        }) || null,
    };
  }

  if (action.type === "SETSELECT") {
    return {
      ...state,
      selected: action.selected,
      value: getValue<ListOption>(action.selected, state.valueField) + "",
    };
  }

  return state;
};

export type SelectboxBaseProps<ListOption extends SelectOption> = {
  id?: string;
  name: string;
  options: ListOption[];
  value: string;
  readOnly?: boolean;
  className?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  valueField?: ValueField<ListOption>;
};

export type SelectboxBaseHandler = {
  setValue: (value: string | number) => void;
};

const SelectboxBase = <ListOption extends SelectOption>(
  {
    id,
    name,
    value,
    options,
    onChange,
    placeholder = "Select a option",
    valueField = "value",
  }: SelectboxBaseProps<ListOption>,
  innerRef: React.Ref<SelectboxBaseHandler>,
) => {
  const [state, dispatch] = React.useReducer(reducer<ListOption>, {
    list: options,
    value,
    valueField,
    selected:
      options.find((opt: ListOption) => {
        const v = getValue(opt, valueField);
        return v === value || "";
      }) || null,
  });

  //useFloating
  const { refs, x, y, strategy, floatingStyles, context } = useFloating({
    open: true,
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate,
    placement: "bottom",
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  React.useImperativeHandle(innerRef, () => ({
    setValue: (value: string | number) => {
      dispatch({
        type: "SETVALUE",
        value: value + "",
      });
    },
  }));

  return (
    <div
      className={twMerge(
        "form-control relative inline-block text-left",
        !state.value && "text-gray-300", //empty
      )}
    >
      {/* mobile select START*/}
      <select
        className="w-full bg-transparent outline-0 md:hidden"
        onChange={(e) => {
          dispatch({
            type: "SETVALUE",
            value: e.target.value,
          });
          if (onChange) onChange(e.target.value);
        }}
      >
        <option value="">{placeholder}</option>
        {state.list.map((opt: ListOption) => (
          <option
            key={opt.id}
            value={getValue<ListOption>(opt, valueField)}
            disabled={opt.enable === false}
          >
            {opt.label}
          </option>
        ))}
      </select>
      {/* mobile select END*/}
      {/* desktop select START*/}
      <Listbox
        className="hidden md:flex"
        as="div"
        value={state.selected}
        onChange={(option) => {
          const v = getValue(option as ListOption, valueField);
          dispatch({
            type: "SETSELECT",
            selected: option as ListOption,
          });
          if (onChange) onChange(v);
        }}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        <ListboxButton className="relative z-10 inline-flex w-full justify-between !p-0 focus:outline-none">
          <span>
            {state.value ? <>{state.selected?.label || ""}</> : placeholder}
          </span>
          <ChevronUpDownIcon
            className="w-5 h-5 text-gray-400"
            aria-hidden="true"
          />
        </ListboxButton>
        <Transition
          as={Fragment}
          enter="transition duration-100 ease-out"
          enterFrom="scale-95 transform opacity-0"
          enterTo="scale-100 transform opacity-100"
          leave="transition duration-75 ease-in"
          leaveFrom="scale-100 transform opacity-100"
          leaveTo="scale-95 transform opacity-0"
        >
          <ListboxOptions
            className="absolute !z-[999] mt-2 inline-block w-full origin-top-right divide-y divide-gray-100 dark:divide-gray-700 rounded-md bg-white dark:bg-gray-950 shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-700 focus:outline-none min-w-[150px]"
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps({
              style: {
                position: strategy,
                top: y ?? "",
                left: x ?? "",
              },
            })}
          >
            <div className="flex flex-col px-1 py-1">
              {state.list.map(<T extends SelectOption>(opt: T) => (
                <ListboxOption
                  key={opt.id}
                  className={twMerge(
                    "relative flex cursor-pointer select-none justify-between px-5 py-4 text-black dark:text-white hover:bg-primary-100 dark:hover:bg-primary-900",
                    opt.enable === false && "cursor-not-allowed opacity-50",
                    state.selected?.id === opt.id && "bg-primary-100 dark:bg-primary-900",
                  )}
                  value={opt}
                  disabled={opt.enable === false}
                >
                  <>
                    <span className="pl-5">{opt.label}</span>
                    {state.selected?.id === opt.id ? (
                      <span
                        className={twMerge(
                          "absolute inset-y-0 left-0 flex items-center pl-3 text-primary-600",
                        )}
                      >
                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                      </span>
                    ) : (
                      <></>
                    )}
                  </>
                </ListboxOption>
              ))}
            </div>
          </ListboxOptions>
        </Transition>
      </Listbox>
      {/* desktop select END*/}
      <input
        type="text"
        id={id}
        name={name}
        style={{ display: "none" }}
        value={state.value + ""}
        readOnly
      />
    </div>
  );
};

export default React.forwardRef(SelectboxBase) as <
  ListOption extends SelectOption,
>(
  props: SelectboxBaseProps<ListOption> & {
    ref?: React.Ref<SelectboxBaseHandler>;
  },
) => React.ReactElement;
