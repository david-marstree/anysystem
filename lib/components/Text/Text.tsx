import React from "react";
import { twMerge } from "tailwind-merge";

export type TextProps = {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  className?: string;
  children: React.ReactNode;
};

const Text: React.FC<TextProps> = ({ tag, className, children }) => {
  return React.createElement(
    tag,
    { className: twMerge("flex flex-row gap-1", className) },
    children,
  );
};

export default Text;
