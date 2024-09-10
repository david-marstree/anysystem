import _ from "lodash";
import * as Yup from "yup";
import type {
  FormField,
  FormFieldWithStructure,
  ValidationBase,
  ValidationMatch,
  ValidationMaxMin,
  YupSchema,
} from "./type";

export const isFormField = (
  field: Record<string, unknown>
): field is FormField => {
  return "name" in field && "dataType" in field && "value" in field;
};

export const getFieldValue = <FormValues extends Record<string, unknown>>(
  fields: FormFieldWithStructure | FormField[]
) => {
  return _.reduce(
    fields,
    (acc, field) => {
      if (
        typeof field !== "object" &&
        !isFormField(field) &&
        !Array.isArray(field)
      ) {
        return acc;
      }

      if (Array.isArray(field) && isFormField(field[0])) {
        acc = { ...acc, ...getFieldValue(field as FormField[]) };
      }

      if (!Array.isArray(field) && isFormField(field)) {
        acc[field.name as keyof FormValues] =
          field.value as FormValues[keyof FormValues];
      }

      return acc;
    },
    {} as FormValues
  );
};

export const getFieldValidation = (
  fields: FormFieldWithStructure | FormField[]
) => {
  const fieldList = _.reduce(
    fields,
    (acc, field) => {
      if (Array.isArray(field) && isFormField(field[0])) {
        acc = [...acc, ...field];
      }
      if (!Array.isArray(field) && isFormField(field)) {
        acc.push(field);
      }
      return acc;
    },
    [] as FormField[]
  );
  return Yup.object().shape(
    _.chain(fieldList)
      .reduce(
        (acc, field) => {
          if (field.dataType === "string") {
            acc.push({
              name: field.name,
              type: "string",
              schmea: Yup.string(),
            });
          }
          if (field.dataType === "number") {
            acc.push({
              name: field.name,
              type: "number",
              schmea: Yup.number(),
            });
          }
          if (field.dataType === "boolean") {
            acc.push({
              name: field.name,
              type: "boolean",
              schmea: Yup.number(),
            });
          }
          return acc;
        },
        [] as {
          name: string;
          type: "string" | "number" | "boolean";
          schmea: Yup.Schema;
        }[]
      )
      .reduce((acc, { name, type, schmea }) => {
        acc[name] = schmea;
        const validation = fieldList.find(
          (field) => field.name === name
        )?.validation;
        if (!validation) {
          return acc;
        }
        // required validation
        if (_.some(validation, (v) => v.type === "required")) {
          acc[name] = acc[name].required(
            _.find(validation, (v) => v.type === "required")?.message ||
              "Required"
          );
        }
        // email validation
        if (
          type === "string" &&
          _.some(validation, (v) => v.type === "email")
        ) {
          const v = _.find(
            validation,
            (v) => v.type === "email"
          ) as ValidationBase;
          acc[name] = (acc[name] as Yup.StringSchema).email(
            v?.message || "Invalid email"
          );
        }
        // maxlength validation
        if (
          ["string", "number"].includes(type) &&
          _.some(validation, (v) => v.type === "max")
        ) {
          const v = _.find(
            validation,
            (v) => v.type === "max"
          ) as ValidationMaxMin;
          acc[name] = (acc[name] as Yup.StringSchema | Yup.NumberSchema).max(
            v.value,
            v?.message || `Max value is ${v.value}`
          );
        }
        // minlength validation
        if (
          ["string", "number"].includes(type) &&
          _.some(validation, (v) => v.type === "min")
        ) {
          const v = _.find(
            validation,
            (v) => v.type === "min"
          ) as ValidationMaxMin;
          acc[name] = (acc[name] as Yup.StringSchema | Yup.NumberSchema).min(
            v.value,
            v?.message || `Min value is ${v.value}`
          );
        }
        // match validation
        if (type === "string" && _.some(validation, (v) => v.type === "min")) {
          const v = _.find(
            validation,
            (v) => v.type === "match"
          ) as ValidationMatch;
          acc[name] = (acc[name] as Yup.StringSchema).matches(
            new RegExp(v.pattern),
            v?.message || `Must match pattern ${v.pattern}`
          );
        }
        return acc;
      }, {} as YupSchema)
      .value()
  );
};
