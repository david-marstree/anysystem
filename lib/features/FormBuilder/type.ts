import { FormField } from "../../components/FormControl";

export type FormBuilderColumn = {
  type: "column";
  id: string;
  name: string;
  data: FormField;
};

export type FormBuilderRow = {
  type: "row";
  id: string;
  data: FormBuilderColumn[];
};
