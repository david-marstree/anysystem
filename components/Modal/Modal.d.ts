import { default as React } from '../../../node_modules/react';
import { ButtonProps } from '../Button';

export type ModalButton = ButtonProps & {
    label: string;
    className?: string;
    onClick: () => void;
};
export type ModalHandler = {
    show: () => void;
    hide: () => void;
};
export type ModalProps = {
    open?: boolean;
    size?: "md" | "lg" | "xl" | "full";
    title: string;
    children: React.ReactNode;
    buttons?: ModalButton[];
    onClickBackdropClose?: boolean;
    className?: {
        header?: string;
        footer?: string;
    };
};
declare const _default: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<ModalHandler>>;
export default _default;
