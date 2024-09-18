import React from "react";
import { twMerge } from "tailwind-merge";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Row, Column, LabelBaseProps, SelectOption, getColumns } from "..";
import { FormControlProps } from "./FormControl";
import DraggableFormControl from "../../features/FormBuilder/components/DraggableFormControl";
import Droppable from "../../features/FormBuilder/components/Droppable";
import type { FormFieldWithStructure } from "./type";

export type FormContentProps = {
  id?: string;
  fields: FormFieldWithStructure;
  values?: Record<string, any>;
  setFieldValue?: (name: string, value: any) => void;
  touched?: any;
  errors?: any;
  isBuilder?: boolean;
};

const FormContent: React.FC<FormContentProps> = ({
  id,
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
        <React.Fragment key={i}>
          {Array.isArray(field) ? (
            <SortableContext
              items={field.map((f) => f.id || "form-control")}
              strategy={horizontalListSortingStrategy}
            >
              {isBuilder === true ? (
                <Droppable
                  id={`${id}-horizontal`}
                  className={twMerge(
                    "grid gap-2 px-4",
                    getColumns({ md: field.length })
                  )}
                >
                  <FormContent
                    fields={field}
                    values={values}
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                    isBuilder={isBuilder}
                  />
                </Droppable>
              ) : (
                <Row
                  className={twMerge("space-y-2 md:space-y-0")}
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
              )}
            </SortableContext>
          ) : (
            <Column
              className={twMerge(isBuilder === true && "relative")}
              id={field.id}
            >
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
                  <DraggableFormControl<SelectOption>
                    isBuilder={isBuilder}
                    formControlProps={{
                      ...(field.componentProps as FormControlProps<SelectOption>),
                      name: field.name,
                      value: values?.[field.name as keyof typeof values] || "",
                      labelProps: {
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
                      } as LabelBaseProps,
                      onChange: (v: unknown) => {
                        setFieldValue && setFieldValue(field.name, v);
                      },
                    }}
                    field={field}
                  />
                </>
              ) : (
                <></>
              )}
            </Column>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default FormContent;
