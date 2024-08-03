export type ValueKey = `$${string}`;

export type ValueNode = (row: object) => React.ReactNode | string;
