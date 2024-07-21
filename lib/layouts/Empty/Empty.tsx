import React from "react";

export type EmptyProps = {
  children?: React.ReactNode;
};

const Empty: React.FC<EmptyProps> = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default Empty;
