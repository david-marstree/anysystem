import React from "react";
import { useFormContext } from "./FormComponent";
import type { FormFieldWithStructure } from "./type";
import Row from "../Row";
import Column from "../Column";
import { LabelBaseProps } from "../Label";
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
        <Row key={i}>
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
              ) : field.componentProps.type &&
                [
                  "text",
                  "number",
                  "date",
                  "datetime",
                  "tel",
                  "email",
                  "password",
                  "radio",
                  "switch",
                  "confirm",
                  "select",
                  "autocomplete",
                ].includes(field.componentProps.type) ? (
                <FormControl<SelectOption>
                  {...(field.componentProps as FormControlProps<SelectOption>)}
                  name={field.name}
                  value={values?.[field.name as keyof typeof values] || ""}
                  labelProps={
                    {
                      ...(field.componentProps?.labelProps
                        ? field.componentProps?.labelProps
                        : {}),
                      isError: Boolean(
                        touched?.[field.name as keyof typeof touched] &&
                          errors?.[field.name as keyof typeof errors]
                      ),
                      errorMessage:
                        (errors?.[
                          field.name as keyof typeof errors
                        ] as string) || "",
                    } as LabelBaseProps
                  }
                  onChange={(v: unknown) => {
                    setFieldValue(field.name, v);
                  }}
                />
              ) : (
                <></>
              )}
            </Column>
          )}
        </Row>
      ))}
    </>
  );
};

export default FormContent;
