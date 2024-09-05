import React from "react";
import { Formik, Form } from "formik";

export type FormComponentProps = {};

const FormComponent: React.FC = () => {
  return (
    <Formik enableReinitialize initialValues={{}} onSubmit={() => {}}>
      {({}) => <Form autoComplete="off"></Form>}
    </Formik>
  );
};

export default FormComponent;
