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

type State<ListOption extends SelectOption> = {
  list: ListOption[];
  query: string;
  filterList: ListOption[];
  value: string[];
  valueField: ValueField<ListOption>;
  selected: ListOption[];
};

type Action<ListOption extends SelectOption> =
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
      selected: ListOption[];
    }
  | {
      type: "REMOVESELECT";
      selected: ListOption;
    };

const reducer = <ListOption extends SelectOption>(
  state: State<ListOption>,
  action: Action<ListOption>,
): State<ListOption> => {
  if (action.type === "SEARCH") {
    return {
      ...state,
      query: action.query,
      filterList: state.list.filter((opt: ListOption) => {
        return opt.label.toLowerCase().includes(action.query.toLowerCase());
      }),
    };
  }
  if (action.type === "SETVALUE") {
    return {
      ...state,
      value: action.value,
      selected:
        state.list.filter((opt: ListOption) => {
          const v = getValue<ListOption>(opt, state.valueField);
          return action.value.includes(v);
        }) || [],
      query: "",
    };
  }
  if (action.type === "SETSELECT") {
    return {
      ...state,
      selected: action.selected,
      value: action.selected.map((opt: ListOption) => {
        return getValue<ListOption>(opt, state.valueField);
      }),
      query: "",
    };
  }
  if (action.type === "REMOVESELECT") {
    const v = getValue<ListOption>(action.selected, state.valueField);
    const value = state.value.filter((val: string) => {
      return val !== v;
    });
    return {
      ...state,
      value,
      selected: state.selected
        ? state.selected.filter((opt: ListOption) => {
            return getValue<ListOption>(opt, state.valueField) !== v;
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

export type AutoCompleteMultipleProps<ListOption extends SelectOption> = {
  id?: string;
  options: ListOption[];
  name: string;
  value?: string[] | number[];
  readOnly?: boolean;
  className?: string;
  placeholder?: string;
  onChange?: (value: string[] | number[]) => void;
  valueField?: ValueField<ListOption>;
};

const AutoCompleteMultiple = <ListOption extends SelectOption>(
  {
    id,
    name,
    value = [],
    options,
    valueField = "value",
    onChange,
    placeholder,
  }: AutoCompleteMultipleProps<ListOption>,
  innerRef: React.Ref<AutoCompleteMultipleHandler>,
) => {
  const [state, dispatch] = React.useReducer(reducer<ListOption>, {
    query: "",
    list: options,
    filterList: options,
    value: value || [],
    valueField,
    selected:
      options.filter((opt: ListOption) => {
        const v = getValue<ListOption>(opt, valueField);
        return _.some(value, (val: string | number) => val + "" === v + "");
      }) || [],
  } as State<ListOption>);

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
          selected: option as ListOption[],
        });
        const valueArray =
          option?.map((opt: ListOption) => {
            return getValue<ListOption>(opt, valueField);
          }) || [];
        onChange && onChange(valueArray);
      }}
      multiple
    >
      <div className="relative flex gap-1">
        {state.selected.length > 0 && (
          <ul className="form-control flex gap-1">
            {state.selected?.map((opt: ListOption, index: number) => (
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
          <ComboboxOptions className="absolute mt-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-gray-900 sm:text-sm">
            {state.filterList.map((opt: ListOption) => (
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

export default React.forwardRef(AutoCompleteMultiple) as <
  ListOption extends SelectOption,
>(
  props: AutoCompleteMultipleProps<ListOption> & {
    ref?: React.Ref<AutoCompleteMultipleHandler>;
  },
) => React.ReactElement;
