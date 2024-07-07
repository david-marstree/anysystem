import React, { Fragment } from "react";
import _ from "lodash";
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
import type { SelectOption, ValueField } from "./Selectbox";
import { getValue } from "./helper";

type State = {
  list: SelectOption[];
  value: string[];
  valueField: ValueField;
  selected: SelectOption[];
};

type Action =
  | {
      type: "SETVALUE";
      value: string[];
    }
  | {
      type: "SETSELECT";
      selected: SelectOption[];
    };

const reducer = (state: State, action: Action) => {
  if (action.type === "SETVALUE") {
    return {
      ...state,
      value: action.value,
      selected:
        state.list.filter((opt: SelectOption) => {
          const v = getValue(opt, state.valueField);
          return action?.value?.includes(v);
        }) || [],
    };
  }

  if (action.type === "SETSELECT") {
    return {
      ...state,
      selected: action.selected,
      value: action.selected.map((opt: SelectOption) =>
        getValue(opt, state.valueField),
      ),
    };
  }

  return state;
};

export interface SelectboxMultipleProps {
  id?: string;
  options: SelectOption[];
  name: string;
  value?: string[] | number[];
  readOnly?: boolean;
  className?: string;
  placeholder?: string;
  onChange?: (value: string[] | number[]) => void;
  valueField?: ValueField;
}

const SelectboxMultiple: React.FC<SelectboxMultipleProps> = ({
  id,
  name,
  options,
  onChange,
  placeholder = "Select a option",
  valueField = "value",
  value = [],
}) => {
  const [state, dispatch] = React.useReducer(reducer, {
    list: options,
    value: value || ([] as string[]),
    valueField,
    selected: value
      ? options.filter((opt: SelectOption) => {
          const v = getValue(opt, valueField);
          return _.some(value, (val: string | number) => val + "" === v + "");
        })
      : ([] as SelectOption[]),
  } as State);

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

  return (
    <div
      className={twMerge(
        "form-control relative inline-block text-left",
        !state.value && "text-gray-300", //empty
      )}
    >
      <Listbox
        as="div"
        value={state.selected}
        onChange={(option) => {
          const valueArray = option.map((opt: SelectOption) => {
            return getValue(opt, valueField);
          });
          dispatch({ type: "SETSELECT", selected: option });
          if (onChange) onChange(valueArray);
        }}
        multiple
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        <ListboxButton className="relative z-10 inline-flex w-full justify-between !p-0 focus:outline-none">
          <span>
            {state.value && state.value.length > 0 ? (
              <>
                {state?.selected
                  ?.map((opt: SelectOption) => opt.label)
                  .join(", ") || ""}
              </>
            ) : (
              placeholder
            )}
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
              {state.list.map((option: SelectOption) => (
                <ListboxOption
                  key={option.id}
                  className={twMerge(
                    "relative flex cursor-pointer select-none justify-between px-5 py-4 text-black hover:bg-indigo-100",
                    option.enable === false && "cursor-not-allowed opacity-50",
                    state.value?.includes(getValue(option, valueField)) &&
                      "bg-indigo-100",
                  )}
                  value={option}
                  disabled={option.enable === false}
                >
                  <>
                    <span className="pl-5">{option.label}</span>
                    {state.value?.includes(getValue(option, valueField)) ? (
                      <span
                        className={twMerge(
                          "absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600",
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
        <input
          type="text"
          id={id}
          name={name}
          style={{ display: "none" }}
          readOnly
          value={state.value + ""}
        />
      </Listbox>
    </div>
  );
};

export default SelectboxMultiple;
