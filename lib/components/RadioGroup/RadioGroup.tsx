import React from "react";
import { twMerge } from "tailwind-merge";
import { Radio, RadioGroup as HeadlessRadioGroup } from "@headlessui/react";
import {
  HiCheckCircle as CheckCircleIcon,
  HiOutlineCheckCircle as CheckCircleOutlineIcon,
} from "react-icons/hi2";
import type { SelectOption, ValueField } from "../Selectbox/SelectboxBase";
import { getValue } from "../Selectbox/helper";

type State<ListOption extends SelectOption> = {
  list: ListOption[];
  value: string | number;
  valueField: ValueField<ListOption>;
  selected: ListOption | null;
};

type Action<ListOption extends SelectOption> =
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
      value: getValue(action.selected, state.valueField) + "",
    };
  }

  return state;
};

export type RadioGroupProps<ListOption extends SelectOption> = {
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

const RadioGroup = <ListOption extends SelectOption>({
  options,
  value,
  valueField = "value",
  onChange,
}: RadioGroupProps<ListOption>) => {
  const [state, dispatch] = React.useReducer(reducer<ListOption>, {
    list: options,
    value,
    valueField,
    selected:
      options.find((opt: ListOption) => {
        const v = getValue<ListOption>(opt, valueField);
        return v === value || "";
      }) || null,
  } as State<ListOption>);

  return (
    <div className="radio-group w-full">
      <HeadlessRadioGroup
        value={state.selected}
        onChange={(opt: ListOption) => {
          dispatch({
            type: "SETSELECT",
            selected: opt,
          });
          onChange && onChange(getValue<ListOption>(opt, state.valueField));
        }}
        className="space-y-2"
      >
        {state.list.map((row) => (
          <Radio
            key={row.id}
            value={row}
            className={({ checked }) =>
              twMerge(
                "group relative flex cursor-pointer rounded border border-gray-400 px-5 py-4 transition focus:outline-none",
                checked &&
                  "border-primary-600 bg-primary-100 dark:border-gray-700 dark:bg-gray-800",
              )
            }
          >
            {({ checked }) => (
              <div className="flex w-full items-center justify-between">
                <div className="text-sm/6">
                  <p className="font-semibold">{row.label}</p>
                </div>
                {checked ? (
                  <CheckCircleIcon
                    className={twMerge(
                      "size-6 fill-primary-600 opacity-0 transition group-hover:opacity-80",
                      checked &&
                        "size-6 fill-primary-600 opacity-100 transition dark:fill-primary-50",
                    )}
                  />
                ) : (
                  <CheckCircleOutlineIcon
                    className={twMerge(
                      "size-6 text-gray-200 transition group-hover:text-primary-600",
                    )}
                  />
                )}
              </div>
            )}
          </Radio>
        ))}
      </HeadlessRadioGroup>
    </div>
  );
};

export default RadioGroup;
