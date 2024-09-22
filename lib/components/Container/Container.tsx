import React from "react";
import { twMerge } from "tailwind-merge";

export type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({
  className,
  ...props
}) => {
  return (
    <div className={twMerge("w-full max-w-lg px-4 py-8 mx-auto ", className)}>
      {props?.children}
    </div>
  );
};
