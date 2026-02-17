import { useField } from "formik";
import { type CheckboxProps, Checkbox } from "./Checkbox";

export type FormCheckboxProps = CheckboxProps;

export const FormCheckbox = ({
  name,
  ...props
}: FormCheckboxProps) => {
  const [field] = useField(name);
  return <Checkbox inputProps={field} name={name} {...props} />;
};
