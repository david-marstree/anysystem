import React from "react";
import ErpLayout from "../layouts/ErpLayout";
import { DataTable } from "../../lib";

const Page2: React.FC = () => {
  return (
    <ErpLayout>
      <div className="p-4">
        <h1>Page 2</h1>
        <DataTable
          selectable
          data={[
            {
              id: "1",
              name: "David",
            },
            {
              id: "2",
              name: "Peter",
            },
            {
              id: "3",
              name: "Mary",
            },
          ]}
          fields={[
            {
              label: "ID",
              key: "id",
              value: "$.id",
            },
            {
              label: "Name",
              key: "name",
              value: "$.name",
            },
          ]}
        />
      </div>
    </ErpLayout>
  );
};
export default Page2;
