import React from "react";
import { twMerge } from "tailwind-merge";
import { FiEyeOff, FiEye } from "react-icons/fi";

export type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  type?: "password" | "text";
};

const PasswordInput: React.FC<PasswordInputProps> = ({
  type = "password",
  ...props
}) => {
  const [showPassword, setShowPassword] = React.useState(type !== "password");

  return (
    <div className="flex w-full items-center">
      <input type={showPassword ? "text" : "password"} {...props} />
      <a
        className={twMerge(
          "mr-2 flex h-9 w-10 cursor-pointer items-center justify-center rounded-full text-gray-600",
          "hover:bg-gray-100 hover:duration-200",
          "btn-show-password",
        )}
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <FiEye fontSize={14} /> : <FiEyeOff fontSize={14} />}
      </a>
    </div>
  );
};

export default PasswordInput;
