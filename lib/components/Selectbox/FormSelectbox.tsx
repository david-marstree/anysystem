import React from "react";
import { useField } from "formik";
import Selectbox, { SelectboxProps, SelectboxHandler } from "./Selectbox";

export type FormSelectboxProps = SelectboxProps & {
  name: string;
};

const FormSelectboxRef: React.ForwardRefRenderFunction<
  SelectboxHandler,
  FormSelectboxProps
> = ({ name, ...props }, innerRef) => {
  const [field] = useField(name);

  return (
    <Selectbox
      ref={innerRef}
      {...{ ...field, value: field?.value || "", ...props, name }}
    />
  );
};

export default React.forwardRef(FormSelectboxRef);
