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
    <div className={twMerge("mx-auto w-full max-w-lg pt-8 px-4", className)}>
      {props?.children}
    </div>
  );
};
