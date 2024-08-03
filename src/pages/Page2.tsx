import React from "react";
import SubLayout from "../layouts/SubLayout";
import { DataTable } from "../../lib";

const Page2: React.FC = () => {
  return (
    <SubLayout title="About">
      <div className="h-full w-full px-4 py-8 md:px-7">
        <h1>Page 2</h1>
        <DataTable
          selectable
          chooseFieldable
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
              default: true,
            },
          ]}
        />
      </div>
    </SubLayout>
  );
};
export default Page2;
