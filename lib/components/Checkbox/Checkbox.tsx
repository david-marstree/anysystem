import React from "react";
import { twMerge } from "tailwind-merge";
import { CheckboxBase } from "./CheckboxBase";

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string | React.ReactNode;
  error?: boolean;
  name: string;
  hidden?: boolean;
  isError?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  className,
  name,
  label,
  hidden,
  isError,
  inputProps,
  ...props
}) => {
  return (
    <label
      className={twMerge(
        "relative my-4 flex cursor-pointer select-none items-center gap-2 py-2 pr-3",
        "after:absolute after:left-1/2 after:top-1/2 after:-z-20 after:h-[calc(100%+12px)] after:w-[calc(100%+20px)] after:-translate-x-1/2 after:-translate-y-1/2 after:transform after:rounded-md after:bg-blue-100 after:opacity-0 after:transition-all after:content-[''] dark:after:bg-gray-800",
        "hover:after:opacity-100 hover:after:duration-200",
        hidden === true && "hidden",
      )}
      htmlFor={props.id}
    >
      <CheckboxBase
        isError={isError}
        name={name}
        inputProps={inputProps}
        className={className}
        {...props}
      />
      {label}
    </label>
  );
};
