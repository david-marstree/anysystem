import React, { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import { HiChevronUpDown as ChevronUpDownIcon } from "react-icons/hi2";
import { FiCheck as CheckIcon } from "react-icons/fi";
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  Transition,
} from "@headlessui/react";
import type { SelectOption, ValueField } from "../Selectbox";
import { getValue } from "../Selectbox/helper";

type State = {
  query: string;
  list: SelectOption[];
  filterList: SelectOption[];
  value: string;
  valueField: ValueField;
  selected: SelectOption | null;
};

type Action =
  | {
      type: "SEARCH";
      query: string;
    }
  | {
      type: "SETVALUE";
      value: string;
    }
  | {
      type: "SETSELECT";
      selected: SelectOption;
    };

const reducer = (state: State, action: Action): State => {
  if (action.type === "SEARCH") {
    return {
      ...state,
      query: action.query,
      filterList: state.list.filter((opt: SelectOption) => {
        return opt.label.toLowerCase().includes(action.query.toLowerCase());
      }),
    };
  }
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

export type AutoCompleteBaseHandler = {
  search: (query: string) => void;
  setValue: (value: string) => void;
};

export type AutoCompleteBaseProps = {
  id?: string;
  options: SelectOption[];
  name: string;
  value?: string | number;
  readOnly?: boolean;
  className?: string;
  placeholder?: string;
  onChange?: (value: string | number) => void;
  valueField?: ValueField;
};

const AutoCompleteBase: React.ForwardRefRenderFunction<
  AutoCompleteBaseHandler,
  AutoCompleteBaseProps
> = (
  {
    id,
    name,
    options,
    value = "",
    valueField = "value",
    onChange,
    placeholder,
  },
  innerRef,
) => {
  const [state, dispatch] = React.useReducer(reducer, {
    list: options,
    query: "",
    filterList: options,
    value: value,
    valueField,
    selected:
      (options.find((opt: SelectOption) => {
        const v = getValue(opt, valueField);
        return value ? v === value : false;
      }) as SelectOption) || null,
  } as State);

  React.useImperativeHandle(innerRef, () => ({
    search: (query: string) => dispatch({ type: "SEARCH", query }),
    setValue: (value: string) => dispatch({ type: "SETVALUE", value }),
  }));

  return (
    <Combobox
      value={state.selected}
      onChange={(option) => {
        dispatch({
          type: "SETSELECT",
          selected: option as SelectOption,
        });
        onChange && onChange(option ? getValue(option, valueField) : "");
      }}
    >
      <div className="relative">
        <ComboboxInput
          placeholder={placeholder}
          onChange={(event) =>
            dispatch({ type: "SEARCH", query: event.target.value })
          }
          autoComplete="off"
          displayValue={(opt: SelectOption | null) => opt?.label || ""}
        />
        <ComboboxButton className="absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </ComboboxButton>
        <input
          className="!hidden"
          type="text"
          id={id}
          name={name}
          readOnly
          value={state.value + ""}
        />
        <Transition
          as={Fragment}
          enter="transition duration-100 ease-out"
          enterFrom="scale-95 transform opacity-0"
          enterTo="scale-100 transform opacity-100"
          leave="transition duration-75 ease-in"
          leaveFrom="scale-100 transform opacity-100"
          leaveTo="scale-95 transform opacity-0"
          afterLeave={() => dispatch({ type: "SEARCH", query: "" })}
        >
          <ComboboxOptions className="absolute z-50 mt-5 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm dark:bg-gray-900">
            {state.filterList.map((opt: SelectOption) => (
              <ComboboxOption as={Fragment} key={opt.id} value={opt}>
                {({ selected, focus }) => (
                  <li
                    className={twMerge(
                      "relative flex cursor-pointer justify-between px-5 py-4 text-black hover:bg-primary-100 dark:text-white",
                      (selected || focus) && "bg-primary-100 dark:bg-gray-700",
                      opt.enable === false && "cursor-not-allowed opacity-50",
                    )}
                  >
                    <span className="pl-5">{opt.label}</span>
                    {selected ? (
                      <span
                        className={twMerge(
                          "absolute inset-y-0 left-0 flex items-center pl-3 text-primary-600",
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </li>
                )}
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Transition>
      </div>
    </Combobox>
  );
};

export default React.forwardRef(AutoCompleteBase);
