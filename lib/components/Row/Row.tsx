import React from "react";
import { twMerge } from "tailwind-merge";

export type ResponsiveColumn = {
  lg?: number;
  md?: number;
  sm?: number;
};

export type RowProps = {
  column?: ResponsiveColumn;
  className?: string;
  children: React.ReactNode;
};

export const getColumns = (
  column?: ResponsiveColumn,
  data?: React.ReactNode
) => {
  if (!column && !data) return "";
  if (!column) {
    column = {
      sm: React.Children.count(data),
      md: React.Children.count(data),
      lg: React.Children.count(data),
    };
  }

  const columnClassName = [];

  switch (column?.sm) {
    case 1:
      columnClassName.push("sm:grid-cols-1");
      break;
    case 2:
      columnClassName.push("sm:grid-cols-2");
      break;
    case 3:
      columnClassName.push("sm:grid-cols-3");
      break;
    case 4:
      columnClassName.push("sm:grid-cols-4");
      break;
    case 5:
      columnClassName.push("sm:grid-cols-5");
      break;
    case 6:
      columnClassName.push("sm:grid-cols-6");
      break;
    case 7:
      columnClassName.push("sm:grid-cols-7");
      break;
    case 8:
      columnClassName.push("sm:grid-cols-8");
      break;
    case 9:
      columnClassName.push("sm:grid-cols-9");
      break;
    case 10:
      columnClassName.push("sm:grid-cols-10");
      break;
    case 11:
      columnClassName.push("sm:grid-cols-11");
      break;
    case 12:
      columnClassName.push("sm:grid-cols-12");
      break;
  }

  switch (column?.md) {
    case 1:
      columnClassName.push("md:grid-cols-1");
      break;
    case 2:
      columnClassName.push("md:grid-cols-2");
      break;
    case 3:
      columnClassName.push("md:grid-cols-3");
      break;
    case 4:
      columnClassName.push("md:grid-cols-4");
      break;
    case 5:
      columnClassName.push("md:grid-cols-5");
      break;
    case 6:
      columnClassName.push("md:grid-cols-6");
      break;
    case 7:
      columnClassName.push("md:grid-cols-7");
      break;
    case 8:
      columnClassName.push("md:grid-cols-8");
      break;
    case 9:
      columnClassName.push("md:grid-cols-9");
      break;
    case 10:
      columnClassName.push("md:grid-cols-10");
      break;
    case 11:
      columnClassName.push("md:grid-cols-11");
      break;
    case 12:
      columnClassName.push("md:grid-cols-12");
      break;
  }

  switch (column?.lg) {
    case 1:
      columnClassName.push("lg:grid-cols-1");
      break;
    case 2:
      columnClassName.push("lg:grid-cols-2");
      break;
    case 3:
      columnClassName.push("lg:grid-cols-3");
      break;
    case 4:
      columnClassName.push("lg:grid-cols-4");
      break;
    case 5:
      columnClassName.push("lg:grid-cols-5");
      break;
    case 6:
      columnClassName.push("lg:grid-cols-6");
      break;
    case 7:
      columnClassName.push("lg:grid-cols-7");
      break;
    case 8:
      columnClassName.push("lg:grid-cols-8");
      break;
    case 9:
      columnClassName.push("lg:grid-cols-9");
      break;
    case 10:
      columnClassName.push("lg:grid-cols-10");
      break;
    case 11:
      columnClassName.push("lg:grid-cols-11");
      break;
    case 12:
      columnClassName.push("lg:grid-cols-12");
      break;
  }
  return columnClassName.join(" ");
};

const Row: React.FC<RowProps> = ({ column, className, children }) => {
  const columnClassName = getColumns(column, children);
  return (
    <div
      className={twMerge("my-row grid md:gap-2", columnClassName, className)}
    >
      {children}
    </div>
  );
};

export default Row;
