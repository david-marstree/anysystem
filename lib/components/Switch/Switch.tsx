import { twMerge } from "tailwind-merge";
import { Switch as HeadlessSwitch } from "@headlessui/react";

export type SwitchProps = {
  variant?: "sm" | "md";
  name: string;
  value: string;
  checked?: boolean;
  onChange: (v: boolean) => void;
};

const Switch = ({
  checked = false,
  onChange,
  name,
  value,
}: SwitchProps) => {
  return (
    <HeadlessSwitch
      checked={checked}
      onChange={(v) => onChange(v)}
      className={twMerge(
        "relative flex p-1 rounded-full cursor-pointer group h-7 w-14 bg-gray-800/10 dark:bg-gray-50/10 transition-colors duration-200 ease-in-out focus:outline-none data-[checked]:bg-primary-500 data-[focus]:outline-1 data-[focus]:outline-white dark:data-[checked]:bg-primary-500"
      )}
    >
      <span
        aria-hidden="true"
        className={
          "inline-block bg-white rounded-full shadow-lg pointer-events-none size-5 translate-x-0 ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
        }
      />
      <input
        type="hidden"
        className="!hidden"
        name={name}
        value={Boolean(checked) === true ? value : ""}
      />
    </HeadlessSwitch>
  );
};

export default Switch;
