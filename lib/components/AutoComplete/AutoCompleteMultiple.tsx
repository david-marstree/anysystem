import React, { Fragment } from "react";
import _ from "lodash";
import { twMerge } from "tailwind-merge";
import { HiChevronUpDown as ChevronUpDownIcon } from "react-icons/hi2";
import { FiCheck as CheckIcon } from "react-icons/fi";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";
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
  list: SelectOption[];
  query: string;
  filterList: SelectOption[];
  value: string[];
  valueField: ValueField;
  selected: SelectOption[];
};

type Action =
  | {
      type: "SEARCH";
      query: string;
    }
  | {
      type: "SETVALUE";
      value: string[];
    }
  | {
      type: "SETSELECT";
      selected: SelectOption[];
    }
  | {
      type: "REMOVESELECT";
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
        state.list.filter((opt: SelectOption) => {
          const v = getValue(opt, state.valueField);
          return action.value.includes(v);
        }) || [],
      query: "",
    };
  }
  if (action.type === "SETSELECT") {
    return {
      ...state,
      selected: action.selected,
      value: action.selected.map((opt: SelectOption) => {
        return getValue(opt, state.valueField);
      }),
      query: "",
    };
  }
  if (action.type === "REMOVESELECT") {
    const v = getValue(action.selected, state.valueField);
    const value = state.value.filter((val: string) => {
      return val !== v;
    });
    return {
      ...state,
      value,
      selected: state.selected
        ? state.selected.filter((opt: SelectOption) => {
            return getValue(opt, state.valueField) !== v;
          })
        : [],
    };
  }

  return state;
};

export type AutoCompleteMultipleHandler = {
  search: (query: string) => void;
  setValue: (value: string[]) => void;
};

export type AutoCompleteMultipleProps = {
  id?: string;
  options: SelectOption[];
  name: string;
  value?: string[] | number[];
  readOnly?: boolean;
  className?: string;
  placeholder?: string;
  onChange?: (value: string[] | number[]) => void;
  valueField?: ValueField;
};

const AutoCompleteMultiple: React.ForwardRefRenderFunction<
  AutoCompleteMultipleHandler,
  AutoCompleteMultipleProps
> = (
  {
    id,
    name,
    value = [],
    options,
    valueField = "value",
    onChange,
    placeholder,
  },
  innerRef,
) => {
  const [state, dispatch] = React.useReducer(reducer, {
    query: "",
    list: options,
    filterList: options,
    value: value || [],
    valueField,
    selected:
      options.filter((opt: SelectOption) => {
        const v = getValue(opt, valueField);
        return _.some(value, (val: string | number) => val + "" === v + "");
      }) || [],
  } as State);

  React.useImperativeHandle(innerRef, () => ({
    search: (query: string) => {
      dispatch({ type: "SEARCH", query });
    },
    setValue: (value: string[]) => {
      dispatch({ type: "SETVALUE", value });
    },
  }));

  return (
    <Combobox
      value={state.selected}
      onChange={(option) => {
        dispatch({
          type: "SETSELECT",
          selected: option as SelectOption[],
        });
        const valueArray =
          option?.map((opt: SelectOption) => {
            return getValue(opt, valueField);
          }) || [];
        onChange && onChange(valueArray);
      }}
      multiple
    >
      <div className="relative flex gap-1">
        {state.selected.length > 0 && (
          <ul className="form-control flex gap-1">
            {state.selected?.map((opt: SelectOption, index: number) => (
              <li key={index}>
                <div className="flex rounded bg-indigo-50 p-1">
                  <span className="whitespace-nowrap text-xs">{opt.label}</span>
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVESELECT", selected: opt })
                    }
                  >
                    <CloseIcon fontSize={12} className="font-bold" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <ComboboxInput
          placeholder={placeholder}
          value={state.query}
          onChange={(event) =>
            dispatch({ type: "SEARCH", query: event.target.value })
          }
          onKeyDown={(e) => {
            if (
              e.key === "Backspace" &&
              state.query === "" &&
              state.selected.length > 0
            ) {
              dispatch({
                type: "REMOVESELECT",
                selected: state.selected[state.selected.length - 1],
              });
            }
          }}
          autoComplete="off"
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
          <ComboboxOptions className="absolute mt-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {state.filterList.map((opt: SelectOption) => (
              <ComboboxOption as={Fragment} key={opt.id} value={opt}>
                {({ selected }) => (
                  <li
                    className={twMerge(
                      "relative flex cursor-pointer justify-between px-5 py-4 text-black hover:bg-primary-100",
                      selected && "bg-primary-100",
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

export default React.forwardRef(AutoCompleteMultiple);
