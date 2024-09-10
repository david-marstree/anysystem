import React, { Fragment } from "react";
import { useFormContext } from "./FormComponent";
import type { FormFieldWithStructure } from "./type";
import Row from "../Row";
import Column from "../Column";
import FormControl, { FormControlProps } from "./FormControl";
import type { SelectOption } from "../Selectbox";

export type FormContentProps = {
  fields: FormFieldWithStructure;
};

const FormContent: React.FC<FormContentProps> = ({ fields }) => {
  const { values, setFieldValue, touched, errors } = useFormContext();

  return (
    <>
      {fields.map((field, i) => (
        <Fragment key={i}>
          {Array.isArray(field) ? (
            <Row
              className="space-y-2 md:space-y-0"
              column={{ md: field.length }}
            >
              <FormContent fields={field} />
            </Row>
          ) : (
            <Column>
              {field?.component ? (
                field?.component(field?.componentProps)
              ) : (
                <FormControl
                  {...(field.componentProps as FormControlProps<SelectOption>)}
                  // @ts-ignore-next-line
                  type={field?.componentProps.type}
                  name={field.name}
                  value={values?.[field.name as keyof typeof values] || ""}
                  labelProps={{
                    label: (field.componentProps?.label as string) || "",
                    isError: Boolean(
                      touched?.[field.name as keyof typeof touched] &&
                        errors?.[field.name as keyof typeof errors]
                    ),
                    errorMessage:
                      (errors?.[field.name as keyof typeof errors] as string) ||
                      "",
                  }}
                  onChange={(v: number | string) => {
                    setFieldValue(field.name, v as string);
                  }}
                />
              )}
            </Column>
          )}
        </Fragment>
      ))}
    </>
  );
};

export default FormContent;
