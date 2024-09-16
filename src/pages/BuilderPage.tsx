import React from "react";
import SubLayout from "../layouts/SubLayout";
import { FormBuilder } from "../../lib";

const BuilderPage: React.FC = () => {
  return (
    <SubLayout title="Builder">
      <FormBuilder />
    </SubLayout>
  );
};

export default BuilderPage;
