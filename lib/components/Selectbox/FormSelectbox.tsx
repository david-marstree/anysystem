import React from "react";
import { useField } from "formik";
import Selectbox, { SelectboxProps, SelectboxHandler } from "./Selectbox";
import { SelectOption } from "./SelectboxBase";

export type FormSelectboxProps<ListOption extends SelectOption> =
  SelectboxProps<ListOption> & {
    name: string;
  };

const FormSelectboxRef = <ListOption extends SelectOption>(
  { name, ...props }: FormSelectboxProps<ListOption>,
  innerRef: React.Ref<SelectboxHandler>,
) => {
  const [field] = useField(name);

  return (
    <Selectbox<ListOption>
      ref={innerRef}
      {...({
        ...field,
        value: field?.value || "",
        ...props,
        name,
      } as SelectboxProps<ListOption>)}
    />
  );
};

export default React.forwardRef(FormSelectboxRef) as <
  ListOption extends SelectOption,
>(
  props: FormSelectboxProps<ListOption> & {
    ref?: React.Ref<SelectboxHandler>;
  },
) => React.ReactElement;
