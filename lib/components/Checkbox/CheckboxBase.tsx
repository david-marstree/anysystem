import React from "react";
import { AiFillCheckSquare, AiFillMinusCircle } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

export type CheckboxBaseProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  isError?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  intermediate?: boolean;
};

export const CheckboxBase: React.FC<CheckboxBaseProps> = ({
  className,
  isError,
  inputProps,
  intermediate = false,
  ...props
}) => {
  return (
    <div className="relative h-5 w-5 overflow-hidden rounded">
      <input
        type="checkbox"
        className={twMerge(
          "relative z-20",
          "peer block h-full w-full cursor-pointer appearance-none rounded border-2 border-gray-400 focus:outline-4 focus:outline-blue-500",
          "checked:border-primary-600",
          intermediate && "border-primary-600",
          isError && "border-red-500",
          className,
        )}
        {...{
          value: inputProps?.value || props?.value || "",
        }}
        {...props}
      />
      {intermediate === true && (
        <span className="absolute left-1/2 top-1/2 flex h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 transform items-center justify-center overflow-hidden rounded font-bold text-primary-600 dark:fill-primary-600">
          <AiFillMinusCircle className="h-full w-full rounded" />
        </span>
      )}
      <span className="absolute left-1/2 top-1/2 hidden h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 transform items-center justify-center overflow-hidden rounded font-bold text-primary-600 peer-checked:z-10 peer-checked:flex dark:fill-primary-600">
        <AiFillCheckSquare className="h-full w-full rounded" />
      </span>
    </div>
  );
};
