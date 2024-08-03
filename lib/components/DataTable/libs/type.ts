export type ValueKey = `$${string}`;

export type ValueNode = (row: object) => React.ReactNode | string;

export type State = {
  DTData: object[];
  DTChecked: boolean[];
  DTShowFields: string[];
};

export type Action =
  | {
      type: "SELECT_ALL";
    }
  | {
      type: "SELECT_ROW";
      index: number;
    }
  | {
      type: "SELECT_FIELDKEY";
      fieldKey: string;
    }
  | {
      type: "SET_FIELD";
      fields: DataTableField[];
    };

export type DataTableField = {
  key: string;
  label: string;
  value: ValueKey | ValueNode | string;
  default?: boolean;
};
