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
  action: Action<ListOption>
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
  variant?: "sm" | "md";
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
  variant = "md",
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
    <div className="w-full radio-group">
      <HeadlessRadioGroup
        value={state.selected ?? undefined}
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
                "group relative flex cursor-pointer rounded border border-gray-400 dark:border-gray-600 transition focus:outline-none",
                variant === "sm" && "px-3 py-2 text-sm",
                variant === "md" && "px-5 py-4 ",
                checked &&
                  "border-primary-600 bg-primary-100 dark:border-gray-700 dark:bg-gray-800"
              )
            }
          >
            {({ checked }) => (
              <div className="flex items-center justify-between w-full">
                <div className="text-sm/6 dark:text-white">
                  <p className="font-semibold">{row.label}</p>
                </div>
                {checked ? (
                  <CheckCircleIcon
                    className={twMerge(
                      "size-6 fill-primary-600 opacity-0 transition group-hover:opacity-80",
                      checked &&
                        "size-6 fill-primary-600 opacity-100 transition dark:fill-primary-50"
                    )}
                  />
                ) : (
                  <CheckCircleOutlineIcon
                    className={twMerge(
                      "text-gray-200 size-6 transition group-hover:text-primary-600"
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
