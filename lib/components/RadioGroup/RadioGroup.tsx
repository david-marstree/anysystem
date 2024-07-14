import React from "react";
import { twMerge } from "tailwind-merge";
import { Radio, RadioGroup as HeadlessRadioGroup } from "@headlessui/react";
import {
  HiCheckCircle as CheckCircleIcon,
  HiOutlineCheckCircle as CheckCircleOutlineIcon,
} from "react-icons/hi2";
import type { SelectOption, ValueField } from "../Selectbox/SelectboxBase";
import { getValue } from "../Selectbox/helper";

type State = {
  list: SelectOption[];
  value: string | number;
  valueField: ValueField;
  selected: SelectOption | null;
};

type Action =
  | {
      type: "SETVALUE";
      value: string;
    }
  | {
      type: "SETSELECT";
      selected: SelectOption;
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

export type RadioGroupProps = {
  id?: string;
  name: string;
  options: SelectOption[];
  value: string;
  readOnly?: boolean;
  className?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  valueField?: ValueField;
};

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  valueField = "value",
  onChange,
}) => {
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

  return (
    <div className="radio-group w-full">
      <HeadlessRadioGroup
        value={state.selected}
        onChange={(opt: SelectOption) => {
          dispatch({
            type: "SETSELECT",
            selected: opt,
          });
          onChange && onChange(getValue(opt, state.valueField));
        }}
        className="space-y-2"
      >
        {state.list.map((row) => (
          <Radio
            key={row.id}
            value={row}
            className={({ checked }) =>
              twMerge(
                "group relative flex cursor-pointer rounded py-4 px-5 border border-gray-400 transition focus:outline-none",
                checked && "bg-blue-100 border-blue-600",
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
                      "size-6 transition fill-blue-600 opacity-0 group-hover:opacity-80",
                      checked && "size-6 opacity-100 transition fill-blue-600 ",
                    )}
                  />
                ) : (
                  <CheckCircleOutlineIcon
                    className={twMerge(
                      "size-6 transition text-gray-200 group-hover:text-blue-600",
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
