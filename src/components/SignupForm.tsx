import React from "react";
import { FormControl, Button, useFormContext } from "../../lib/";
import type { SelectOption } from "../../lib/";

const SignupForm = <
  FormValues extends Record<string, unknown>,
>(): React.ReactElement => {
  const { values, handleChange, handleBlur, setFieldValue, touched, errors } =
    useFormContext<FormValues>();

  console.log("errors", errors);
  console.log("touched", touched);
  return (
    <>
      <FormControl
        name="username"
        value={(values?.username as string) || ""}
        placeholder="Username"
        onChange={handleChange}
        onBlur={handleBlur}
        type="text"
        labelProps={{
          label: "Username",
          isError: Boolean(touched?.username && errors.username),
          errorMessage: (errors?.username as string) || "",
        }}
      />
      <FormControl
        name="password"
        value={(values?.password as string) || ""}
        placeholder="Password"
        onChange={handleChange}
        onBlur={handleBlur}
        type="password"
        labelProps={{ label: "Password" }}
      />
      <FormControl
        name="date"
        value={(values?.date as number) || new Date().getTime() / 1000}
        onChange={(v: number) => setFieldValue("date", v)}
        type="date"
        labelProps={{ label: "Birth of Date" }}
      />
      <FormControl<SelectOption>
        name="phonenumber"
        value={(values?.phonenumber as string) || ""}
        placeholder="Phone number"
        onChange={(v: unknown) => setFieldValue("phonenumber", v + "")}
        type="tel"
        phonePrefixOptions={[
          {
            id: "1",
            label: "Macau +853",
            value: "853",
            enable: true,
          },
          {
            id: "2",
            label: "China +86",
            value: "86",
            enable: true,
          },
          {
            id: "3",
            label: "Hong Kong +852",
            value: "852",
            enable: true,
          },
        ]}
        phonePrefix="853"
        labelProps={{ label: "Phone number" }}
      />
      <FormControl
        type="radio"
        name="radio"
        value={(values?.radio as string) || "1"}
        onChange={(e) => setFieldValue("radio", e)}
        options={[
          {
            id: "1",
            label: "Option 1",
            value: "1",
            enable: true,
          },
          {
            id: "2",
            label: "Option 2",
            value: "2",
            enable: true,
          },
          {
            id: "3",
            label: "Option 3",
            value: "3",
            enable: true,
          },
        ]}
        labelProps={{ label: "Radio", type: "normal" }}
      />
      <FormControl
        type="confirm"
        label="Remember me"
        name="rememberMe"
        checked={(values?.checkbox as boolean) || false}
        onChange={(e) => setFieldValue("checkbox", e.target.checked)}
      />
      <FormControl
        type="switch"
        name="open"
        value="open"
        checked={(values?.checkbox as boolean) || false}
        onChange={(v: boolean) => setFieldValue("open", v)}
        labelProps={{ label: "Open" }}
      />

      <Button variant="primary" type="submit">
        Button
      </Button>
    </>
  );
};

export default SignupForm;
