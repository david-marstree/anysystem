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

  const calHeight = (value: string) => {
    let numberOfLineBreaks = (value.match(/\n/g) || []).length + 1;
    inputRef.current!.style.height = `${numberOfLineBreaks * 1.25 + 1}em`;
  };

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
          onChange: (e) => {
            props?.onChange?.(e);
            calHeight(e.target.value);
          },
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
