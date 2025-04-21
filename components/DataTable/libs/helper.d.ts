import { ValueKey, ValueNode } from './type';

export declare const isValueKey: (key: string) => key is ValueKey;
export declare const getValueByKey: <DataType extends object>(data: DataType, key: ValueKey | ValueNode<DataType> | string) => unknown;
