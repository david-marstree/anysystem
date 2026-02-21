import React from "react";
import { twMerge } from "tailwind-merge";
import LabelBase, {type LabelBaseProps} from "../Label";

export type InputBaseProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  inputBefore?: React.ReactNode;
  inputAfter?: React.ReactNode;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  className?: {
    container?: string;
    input?: string;
  };
  labelProps?: LabelBaseProps;
};

const InputBase: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputBaseProps
> = (
  { name, inputProps, inputBefore, inputAfter, className, labelProps,  ...props },
  innerRef,
) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useImperativeHandle(
    innerRef,
    () => inputRef.current as HTMLInputElement,
  );

  const render = () => (
    <div
      className={twMerge(
        "flex w-full items-center",
        className?.container && className.container,
      )}
    >
      {inputBefore && (
        <div
          className={twMerge(
            "btn-before mr-2 flex h-9 items-center justify-center rounded-full px-3 text-gray-400",
          )}
        >
          {inputBefore}
        </div>
      )}
      <input
        ref={inputRef}
        {...{
          ...(inputProps && inputProps),
          ...props,
          value: inputProps?.value || props?.value || "",
          className: twMerge(
            "dark:bg-gray-950 dark:text-white",
            className?.input && className.input,
          ),
          readOnly: props.readOnly,
          id: name,
        }}
      />

      {inputAfter && (
        <div
          className={twMerge(
            "btn-after mr-2 flex h-9 items-center justify-center rounded-full text-gray-400",
          )}
        >
          {inputAfter}
        </div>
      )}
    </div>
  );

  if (labelProps) {
    return (
      <LabelBase {...labelProps}>
        {render()}
      </LabelBase>
    );
  }

  return render();
};

export default React.forwardRef(InputBase);
