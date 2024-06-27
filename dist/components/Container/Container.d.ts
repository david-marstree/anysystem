import { default as React } from 'react';
import { ComponentObject } from '../index';

export type ContainerProps = {
    className?: string;
    data?: ComponentObject[];
    children?: React.ReactNode;
};
export declare const Container: React.FC<ContainerProps>;
