import React from "react";
import { twMerge } from "tailwind-merge";
import type { ComponentObject } from "@contexts/types";
import Component, { type ComponentProps } from "./Component";

export type ContainerProps = {
  className?: string;
  data: ComponentObject[];
};

export const Container: React.FC<ContainerProps> = ({
  className,
  ...props
}) => {
  return (
    <div className={twMerge("mx-auto w-full max-w-lg", className)}>
      {props?.data &&
        props.data.map((row, i) => (
          <Component key={i} {...(row as ComponentProps)} />
        ))}
    </div>
  );
};
