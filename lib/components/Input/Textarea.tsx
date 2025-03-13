import React from "react";
import { twMerge } from "tailwind-merge";

export type TextareaProps = React.InputHTMLAttributes<HTMLTextAreaElement> & {
  name: string;
  inputBefore?: React.ReactNode;
  inputAfter?: React.ReactNode;
  inputProps?: React.InputHTMLAttributes<HTMLTextAreaElement>;
  className?: {
    container?: string;
    input?: string;
  };
};

const Textarea: React.ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaProps
> = (
  { name, inputProps, inputBefore, inputAfter, className, ...props },
  innerRef,
) => {
  const inputRef = React.useRef<HTMLTextAreaElement>(null);

  React.useImperativeHandle(
    innerRef,
    () => inputRef.current as HTMLTextAreaElement,
  );

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
            "btn-before mr-2 flex h-9 items-center justify-center rounded-full px-3 text-gray-400",
          )}
        >
          {inputBefore}
        </div>
      )}
      <textarea
        ref={inputRef}
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
            "btn-after mr-2 flex h-9 items-center justify-center rounded-full text-gray-400",
          )}
        >
          {inputAfter}
        </div>
      )}
    </div>
  );
};

export default React.forwardRef(Textarea);
