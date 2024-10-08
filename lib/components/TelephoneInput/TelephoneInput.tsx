import React from "react";
import InputBase from "../Input/InputBase";
import type { InputBaseProps } from "../Input/InputBase";
import AutoComplete from "../AutoComplete/AutoComplete";
import { SelectOption } from "../Selectbox";
import { twMerge } from "tailwind-merge";

type Action =
  | {
      type: "SETPREFIX";
      value: string;
    }
  | {
      type: "SETCONTENT";
      value: string;
    };

type State = {
  prefix: string;
  content: string;
  realPhone: string;
};

const reducer = (state: State, action: Action): State => {
  if (action.type === "SETPREFIX") {
    return {
      ...state,
      prefix: action.value,
      realPhone: `${action.value}-${state.content}`,
    };
  }
  if (action.type === "SETCONTENT") {
    return {
      ...state,
      content: action.value,
      realPhone: `${state.prefix}-${action.value}`,
    };
  }
  return state;
};

export type TelephoneInputProps =
  React.InputHTMLAttributes<HTMLInputElement> & {
    type: "tel";
    name: string;
    className?: {
      container?: string;
      input?: string;
    };
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    phonePrefixOptions: SelectOption[];
    phonePrefix?: string;
    onChange?: (value: string) => unknown;
  };

const TelephoneInput = ({
  className,
  value,
  phonePrefix,
  phonePrefixOptions,
  onChange,
  ...props
}: TelephoneInputProps) => {
  const telClassName = React.useMemo(() => {
    let c = className || { container: undefined, input: undefined };
    c.container = twMerge("w-1/2", c?.container || "");
    return c;
  }, [className]) as InputBaseProps["className"];

  const phoneArr = React.useMemo(() => {
    return (value + "").split("-");
  }, [value]);

  const phonePrefixValue = React.useMemo(() => {
    return phoneArr && phoneArr[0]
      ? phoneArr[0]
      : phonePrefix
        ? phonePrefix
        : "";
  }, [phoneArr, phonePrefix]);

  const phoneContent = React.useMemo(() => {
    return phoneArr && phoneArr[1] ? phoneArr[1] : "";
  }, [phoneArr]);

  const [state, dispatch] = React.useReducer(reducer, {
    prefix: phonePrefixValue,
    content: phoneContent,
    realPhone: `${phonePrefixValue}-${phoneContent}`,
  });

  return (
    <div className="flex">
      <div className="w-1/2 btn-phone-prefix">
        <AutoComplete<SelectOption>
          options={phonePrefixOptions}
          name={`phonePrefix-${props.name}`}
          valueField="value"
          value={state.prefix}
          onChange={(value: string) => {
            dispatch({ type: "SETPREFIX", value: value as string });
            onChange && onChange(`${value}-${state.content}` as string);
          }}
          closeButton={false}
        />
      </div>
      <InputBase
        className={telClassName}
        value={state.content}
        onChange={(e) => {
          dispatch({ type: "SETCONTENT", value: e.target.value });
          onChange && onChange(`${state.prefix}-${e.target.value}` as string);
        }}
        {...props}
      />
      <input
        type="hidden"
        name={props.name}
        value={state.realPhone}
        className="!hidden"
      />
    </div>
  );
};

export default TelephoneInput;
