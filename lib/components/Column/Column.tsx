import React from "react";
import { twMerge } from "tailwind-merge";
import { type ResponsiveColumn } from "../Row";

export type ColumnProps = {
  className?: string;
  span?: ResponsiveColumn;
  children: React.ReactNode;
};

const getColumnClassName = (span?: ResponsiveColumn): string => {
  if (!span) {
    return "";
  }

  const columnClassName = [];

  switch (span.sm) {
    case 1:
      columnClassName.push("sm:col-span-1");
      break;
    case 2:
      columnClassName.push("sm:col-span-2");
      break;
    case 3:
      columnClassName.push("sm:col-span-3");
      break;
    case 4:
      columnClassName.push("sm:col-span-4");
      break;
    case 5:
      columnClassName.push("sm:col-span-5");
      break;
    case 6:
      columnClassName.push("sm:col-span-6");
      break;
    case 7:
      columnClassName.push("sm:col-span-7");
      break;
    case 8:
      columnClassName.push("sm:col-span-8");
      break;
    case 9:
      columnClassName.push("sm:col-span-9");
      break;
    case 10:
      columnClassName.push("sm:col-span-10");
      break;
    case 11:
      columnClassName.push("sm:col-span-11");
      break;
    case 12:
      columnClassName.push("sm:col-span-12");
      break;
  }

  switch (span.md) {
    case 1:
      columnClassName.push("md:col-span-1");
      break;
    case 2:
      columnClassName.push("md:col-span-2");
      break;
    case 3:
      columnClassName.push("md:col-span-3");
      break;
    case 4:
      columnClassName.push("md:col-span-4");
      break;
    case 5:
      columnClassName.push("md:col-span-5");
      break;
    case 6:
      columnClassName.push("md:col-span-6");
      break;
    case 7:
      columnClassName.push("md:col-span-7");
      break;
    case 8:
      columnClassName.push("md:col-span-8");
      break;
    case 9:
      columnClassName.push("md:col-span-9");
      break;
    case 10:
      columnClassName.push("md:col-span-10");
      break;
    case 11:
      columnClassName.push("md:col-span-11");
      break;
    case 12:
      columnClassName.push("md:col-span-12");
      break;
  }

  switch (span.lg) {
    case 1:
      columnClassName.push("lg:col-span-1");
      break;
    case 2:
      columnClassName.push("lg:col-span-2");
      break;
    case 3:
      columnClassName.push("lg:col-span-3");
      break;
    case 4:
      columnClassName.push("lg:col-span-4");
      break;
    case 5:
      columnClassName.push("lg:col-span-5");
      break;
    case 6:
      columnClassName.push("lg:col-span-6");
      break;
    case 7:
      columnClassName.push("lg:col-span-7");
      break;
    case 8:
      columnClassName.push("lg:col-span-8");
      break;
    case 9:
      columnClassName.push("lg:col-span-9");
      break;
    case 10:
      columnClassName.push("lg:col-span-10");
      break;
    case 11:
      columnClassName.push("lg:col-span-11");
      break;
    case 12:
      columnClassName.push("lg:col-span-12");
      break;
  }
  return columnClassName.join(" ");
};
const Column: React.FC<ColumnProps> = ({
  span = { sm: 1, md: 1 },
  className,
  children,
}) => {
  const columnClassName = getColumnClassName(span);
  return (
    <div className={twMerge("my-col", columnClassName, className)}>
      {children}
    </div>
  );
};

export default Column;
