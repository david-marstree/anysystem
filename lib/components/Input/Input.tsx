import React from "react";
import { twMerge } from "tailwind-merge";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  inputBefore?: React.ReactNode;
  inputAfter?: React.ReactNode;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  className?: {
    container?: string;
    input?: string;
  };
  decimal?: number;
};

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, inputProps, inputBefore, inputAfter, className, ...props },
  innerRef,
) => {
  return (
    <div
      className={twMerge(
        "flex w-full items-center",
        className?.container && className.container,
      )}
    >
      {inputBefore && (
        <div
          className={twMerge(
            "btn-before mr-2 flex h-9 w-10 items-center justify-center rounded-full text-gray-400",
          )}
        >
          {inputBefore}
        </div>
      )}
      <input
        ref={innerRef}
        {...{
          ...(inputProps && inputProps),
          ...props,
          value: inputProps?.value || props?.value || "",
          className: twMerge(className?.input && className.input),
          readOnly: props.readOnly,
          id: name,
        }}
      />

      {inputAfter && (
        <div
          className={twMerge(
            "btn-after mr-2 flex h-9 w-10 items-center justify-center rounded-full text-gray-400",
          )}
        >
          {inputAfter}
        </div>
      )}
    </div>
  );
};

export default React.forwardRef(Input);
