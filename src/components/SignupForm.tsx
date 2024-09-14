import React from "react";
import { FormControl, Button, useFormContext } from "../../lib/";
import type { SelectOption } from "../../lib/";

const SignupForm = <
  FormValues extends Record<string, unknown>,
>(): React.ReactElement => {
  const { values, setFieldValue, touched, errors } =
    useFormContext<FormValues>();

  return (
    <>
      {/*

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
        checked={(values?.open as boolean) || false}
        onChange={(v: boolean) => setFieldValue("open", v)}
        labelProps={{ label: "Open" }}
      />
      */}

      <Button variant="primary" type="submit">
        Button
      </Button>
    </>
  );
};

export default SignupForm;
