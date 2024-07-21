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
  type?: "border" | "normal" | "horizontal";
};

const LabelBase: React.FC<LabelBaseProps> = ({
  label,
  className,
  htmlFor,
  isError = false,
  errorMessage,
  type = "border",
  children,
}) => {
  return (
    <div className="flex flex-col">
      <div
        className={twMerge(
          "relative flex w-full flex-col ",
          type === "border" && "rounded border border-gray-400",
          type === "horizontal" ? "flex-row gap-2" : "form-group",
          isError && "error",
          className,
        )}
      >
        {label && (
          <label
            className={twMerge(
              type === "border" &&
                "hidden text-gray-600 opacity-0 dark:text-white",
              type === "horizontal" && "flex items-center justify-center",
              "mb-1 text-sm font-semibold",
            )}
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
