import React from "react";
import { twMerge } from "tailwind-merge";
import { Row, Column, LabelBaseProps, SelectOption, Icon } from "..";
import FormControl, { FormControlProps } from "./FormControl";
import type { FormFieldWithStructure } from "./type";

export type FormContentProps = {
  fields: FormFieldWithStructure;
  values?: Record<string, any>;
  setFieldValue?: (name: string, value: any) => void;
  touched?: any;
  errors?: any;
  isBuilder?: boolean;
};

const FormContent: React.FC<FormContentProps> = ({
  fields,
  values,
  setFieldValue,
  touched,
  errors,
  isBuilder = false,
}) => {
  return (
    <>
      {fields.map((field, i) => (
        <Row key={i}>
          {Array.isArray(field) ? (
            <Row
              className="space-y-2 md:space-y-0"
              column={{ md: field.length }}
            >
              <FormContent
                fields={field}
                values={values}
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
                isBuilder={isBuilder}
              />
            </Row>
          ) : (
            <Column className={twMerge(isBuilder === true && "relative")}>
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
                <>
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
                      setFieldValue && setFieldValue(field.name, v);
                    }}
                  />
                  {isBuilder && (
                    <div
                      className={twMerge(
                        "absolute inset-0 group form-builder-holder",
                        "hover:border-2 hover:border-blue-500"
                      )}
                    >
                      <div className="relative inset-0">
                        <div className="absolute top-0 right-0 hidden group-hover:block">
                          <button type="button" className="p-1 bg-gray-300">
                            <Icon name="AiOutlineDelete" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </>
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
