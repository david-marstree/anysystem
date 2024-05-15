import React from "react";
import { twMerge } from "tailwind-merge";
import { FiAlertCircle } from "react-icons/fi";

export type LabelBaseProps = {
  label: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
  isError?: boolean;
  errorMessage?: string;
};

const LabelBase: React.FC<LabelBaseProps> = ({
  label,
  className,
  htmlFor,
  isError = false,
  errorMessage,
  children,
}) => {
  return (
    <div className="flex flex-col">
      <div
        className={twMerge(
          "relative mb-2 mt-2 flex w-full flex-col rounded border border-gray-400",
          "form-group",
          isError && "error",
          className,
        )}
      >
        {label && (
          <label
            className="hidden text-gray-600 opacity-0 dark:text-white"
            htmlFor={htmlFor}
          >
            {label}
          </label>
        )}
        {children}
      </div>
      {isError && errorMessage && (
        <span className="flex items-center gap-1 text-sm text-red-600">
          <div className="w-4">
            <FiAlertCircle />
          </div>
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default LabelBase;
