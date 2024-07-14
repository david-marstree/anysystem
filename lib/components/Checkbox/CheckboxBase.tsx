import React from "react";
import { AiFillCheckSquare } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

export type CheckboxBaseProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  isError?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

export const CheckboxBase: React.FC<CheckboxBaseProps> = ({
  className,
  isError,
  inputProps,
  ...props
}) => {
  return (
    <div className="relative h-5 w-5 overflow-hidden rounded">
      <input
        type="checkbox"
        className={twMerge(
          "relative z-10",
          "peer block h-full w-full cursor-pointer appearance-none rounded border-2 border-gray-400 focus:outline-4 focus:outline-blue-500",
          "checked:border-blue-600",
          isError && "border-red-500",
          className,
        )}
        {...{
          value: inputProps?.value || props?.value || "",
        }}
        {...props}
      />
      <span className="absolute left-1/2 top-1/2 hidden h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 transform items-center justify-center overflow-hidden rounded font-bold text-blue-600 peer-checked:flex">
        <AiFillCheckSquare className="h-full w-full rounded" />
      </span>
    </div>
  );
};
