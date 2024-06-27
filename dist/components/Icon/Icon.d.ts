export type IconProps = {
    name: string;
    className?: string;
    size?: number;
};
declare const Icon: ({ name, ...props }: IconProps) => JSX.Element;
export default Icon;
