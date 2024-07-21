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

export type ValueCallback = (option: SelectOption) => string;

export type ValueField = ValueCallback | "id" | "value" | "label" | string;

export type SelectOption = {
  id: string | number;
  label: string;
  value: string | number;
  enable: boolean;
};

export type Action =
  | {
      type: "SETVALUE";
      value: string;
    }
  | {
      type: "SETSELECT";
      selected: SelectOption;
    };

type State = {
  list: SelectOption[];
  value: string | number;
  valueField: ValueField;
  selected: SelectOption | null;
};

const reducer = (state: State, action: Action): State => {
  if (action.type === "SETVALUE") {
    return {
      ...state,
      value: action.value,
      selected:
        state.list.find((opt: SelectOption) => {
          const v = getValue(opt, state.valueField);
          return v === action.value;
        }) || null,
    };
  }

  if (action.type === "SETSELECT") {
    return {
      ...state,
      selected: action.selected,
      value: getValue(action.selected, state.valueField) + "",
    };
  }

  return state;
};

export type SelectboxBaseProps = {
  id?: string;
  name: string;
  options: SelectOption[];
  value: string | number;
  readOnly?: boolean;
  className?: string;
  placeholder?: string;
  onChange: (value: string | number) => void;
  valueField?: ValueField;
};

export type SelectboxBaseHandler = {
  setValue: (value: string | number) => void;
};

const SelectboxBase: React.ForwardRefRenderFunction<
  SelectboxBaseHandler,
  SelectboxBaseProps
> = (
  {
    id,
    name,
    value,
    options,
    onChange,
    placeholder = "Select a option",
    valueField = "value",
  },
  innerRef,
) => {
  const [state, dispatch] = React.useReducer(reducer, {
    list: options,
    value,
    valueField,
    selected:
      options.find((opt: SelectOption) => {
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
        {state.list.map((opt: SelectOption) => (
          <option
            key={opt.id}
            value={getValue(opt, valueField)}
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
          const v = getValue(option as SelectOption, valueField);
          dispatch({
            type: "SETSELECT",
            selected: option as SelectOption,
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
            className="h-5 w-5 text-gray-400"
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
            className="absolute !z-[999] mt-2 inline-block w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
              {state.list.map((opt: SelectOption) => (
                <ListboxOption
                  key={opt.id}
                  className={twMerge(
                    "relative flex cursor-pointer select-none justify-between px-5 py-4 text-black hover:bg-primary-100",
                    opt.enable === false && "cursor-not-allowed opacity-50",
                    state.selected?.id === opt.id && "bg-primary-100",
                  )}
                  value={opt}
                  disabled={opt.enable === false}
                >
                  <>
                    <span className="pl-5">{opt.label}</span>
                    {state.selected?.id === opt.id ? (
                      <span
                        className={twMerge(
                          "absolute inset-y-0 left-0 flex items-center pl-3 text-primary/60",
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
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

export default React.forwardRef(SelectboxBase);
