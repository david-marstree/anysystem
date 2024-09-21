import React from "react";
import SubLayout from "../layouts/SubLayout";
import { FlowBuilder } from "../../lib";

const FlowPage: React.FC = () => {
  return (
    <SubLayout title="Flow">
      <FlowBuilder />
    </SubLayout>
  );
};

export default FlowPage;
