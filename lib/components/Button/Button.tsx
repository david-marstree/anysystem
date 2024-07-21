import React from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "primary";
  size?: "xs" | "sm" | "md" | "lg";
};

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { children, className, variant = "default", size = "md", ...props },
  innerRef,
) => {
  const getVariant = React.useMemo(() => {
    switch (variant) {
      case "default":
        return "bg-gray-400 text-white after:bg-white";
      case "primary":
        return "bg-primary-600 text-white after:bg-white";
      default:
        return "bg-gray-400 text-white after:bg-white";
    }
  }, [variant]);

  const getSize = React.useMemo(() => {
    switch (size) {
      case "xs":
        return "px-4 py-2 text-xs";
      case "sm":
        return "px-4 py-2 text-sm";
      case "md":
        return "px-4 py-2";
      case "lg":
        return "px-6 py-3";
      default:
        return "px-4 py-2";
    }
  }, [size]);

  return (
    <button
      ref={innerRef}
      className={twMerge(
        "relative overflow-hidden rounded",
        "after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:rounded-l after:bg-gray-400 after:opacity-0", //after:
        "disabled:cursor-not-allowed disabled:opacity-50", //disabled
        "hover:after:w-full hover:after:transform hover:after:opacity-20 hover:after:transition-all hover:after:duration-300", //hover:
        getVariant,
        getSize,
        className,
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default React.forwardRef(Button);
