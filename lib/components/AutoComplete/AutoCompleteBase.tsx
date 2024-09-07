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

type State<ListOption extends SelectOption> = {
  query: string;
  list: ListOption[];
  filterList: ListOption[];
  value: string;
  valueField: ValueField<ListOption>;
  selected: ListOption | null;
};

type Action<ListOption extends SelectOption> =
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
      selected: ListOption;
    };

const reducer = <ListOption extends SelectOption>(
  state: State<ListOption>,
  action: Action<ListOption>
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

export type AutoCompleteBaseHandler = {
  search: (query: string) => void;
  setValue: (value: string) => void;
};

export type AutoCompleteBaseProps<ListOption extends SelectOption> = {
  id?: string;
  options: ListOption[];
  name: string;
  value?: string | number;
  readOnly?: boolean;
  className?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onSearch?: (query: string) => void;
  valueField?: ValueField<ListOption>;
};

const AutoCompleteBase = <ListOption extends SelectOption>(
  {
    id,
    name,
    options,
    value = "",
    valueField = "value",
    onChange,
    onSearch,
    placeholder,
  }: AutoCompleteBaseProps<ListOption>,
  innerRef: React.Ref<AutoCompleteBaseHandler>
) => {
  const [state, dispatch] = React.useReducer(reducer<ListOption>, {
    list: options,
    query: "",
    filterList: options,
    value: value,
    valueField,
    selected:
      (options.find((opt: ListOption) => {
        const v = getValue<ListOption>(opt, valueField);
        return value ? v === value : false;
      }) as ListOption) || null,
  } as State<ListOption>);

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
          selected: option as ListOption,
        });
        onChange &&
          onChange(option ? getValue<ListOption>(option, valueField) : "");
      }}
    >
      <div className="relative">
        <ComboboxInput
          placeholder={placeholder}
          onChange={(event) => {
            dispatch({ type: "SEARCH", query: event.target.value });
            onSearch && onSearch(event.target.value);
          }}
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
          <ComboboxOptions className="absolute z-50 mt-5 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-gray-900 sm:text-sm">
            {state.filterList.map((opt: ListOption) => (
              <ComboboxOption as={Fragment} key={opt.id} value={opt}>
                {({ selected, focus }) => (
                  <li
                    className={twMerge(
                      "relative flex cursor-pointer justify-between px-5 py-4 text-black hover:bg-primary-100 dark:text-white",
                      (selected || focus) && "bg-primary-100 dark:bg-gray-700",
                      opt.enable === false && "cursor-not-allowed opacity-50"
                    )}
                  >
                    <span className="pl-5">{opt.label}</span>
                    {selected ? (
                      <span
                        className={twMerge(
                          "absolute inset-y-0 left-0 flex items-center pl-3 text-primary-600"
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

export default React.forwardRef(AutoCompleteBase) as <
  ListOption extends SelectOption,
>(
  props: AutoCompleteBaseProps<ListOption> & {
    ref?: React.Ref<AutoCompleteBaseHandler>;
  }
) => React.ReactElement;
