import * as Icons from "react-icons/ai";

export type IconProps = {
  name: string;
  className?: string;
  size?: number;
};

const Icon = ({ name, ...props }: IconProps): JSX.Element => {
  const IconElement = Icons[name as keyof typeof Icons];
  return <IconElement {...(props as JSX.IntrinsicAttributes)} />;
};

export default Icon;
