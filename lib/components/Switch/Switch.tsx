import React from "react";
import { Switch as HeadlessSwitch } from "@headlessui/react";

export type SwitchProps = {
  name: string;
  value: string;
  checked: boolean;
  onChange: (v: boolean) => void;
};

const Switch: React.FC<SwitchProps> = ({ checked, onChange, name, value }) => {
  return (
    <HeadlessSwitch
      checked={checked}
      onChange={(v) => onChange(v)}
      className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-gray-800/10 dark:bg-gray-50/10 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[checked]:bg-primary-500 data-[focus]:outline-1 data-[focus]:outline-white dark:data-[checked]:bg-primary-500"
    >
      <span
        aria-hidden="true"
        className="size-5 pointer-events-none inline-block translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
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
