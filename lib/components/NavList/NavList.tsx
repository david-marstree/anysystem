import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { BsChevronRight as ChevronRightIcon } from "react-icons/bs";
import { twMerge } from "tailwind-merge";

export type NavItemObject = {
  label: string;
  path?: string;
  icon?: React.ComponentType<{ size?: number }>;
  title?: boolean;
  list?: NavItemObject[];
  onClick?: () => void;
};

export type NavListProps = {
  list: NavItemObject[];
  location?: {
    pathname: string;
  };
};

const NavList = ({ list, location }: NavListProps) => {
  return (
    <nav className="w-full px-4 py-6 bg-white dark:bg-gray-950">
      <ul>
        {list &&
          list.map((item, index) => (
            <li key={index}>
              {!item?.title ? (
                !item.list ? (
                  <a
                    href={item?.path}
                    className={twMerge(
                      "flex w-full items-center justify-start gap-2 rounded p-3 font-semibold hover:bg-primary-50 dark:text-white dark:hover:bg-gray-800 cursor-pointer",
                      location?.pathname === item.path
                        ? "bg-primary-50 dark:bg-gray-800"
                        : ""
                    )}
                    onClick={item?.onClick}
                  >
                    {item.icon && <item.icon size={20} />}
                    <span>{item.label}</span>
                  </a>
                ) : (
                  <Disclosure as="div">
                    {({ open }) => (
                      <>
                        <DisclosureButton
                          className={twMerge(
                            "flex items-center w-full p-3 font-semibold text-left rounded gap-2 hover:bg-primary-50 dark:text-white dark:hover:bg-gray-700"
                          )}
                        >
                          {item.icon && <item.icon size={20} />}
                          <span>{item.label}</span>
                          <ChevronRightIcon
                            className={twMerge(
                              open
                                ? "text-gray-500 rotate-90"
                                : "text-gray-400",
                              "w-4 h-4 ml-auto shrink-0"
                            )}
                            aria-hidden="true"
                          />
                        </DisclosureButton>
                        <DisclosurePanel as="ul" className="px-2 mt-1">
                          {item?.list?.map((subItem, index) => (
                            <li key={index}>
                              {/* 44px */}
                              <DisclosureButton
                                as="a"
                                href={subItem?.path}
                                className={twMerge(
                                  "block rounded py-2 pl-9 pr-2 text-gray-700 hover:bg-primary-50 dark:text-white dark:hover:bg-gray-700",
                                  location?.pathname === subItem.path &&
                                    "bg-primary-50 dark:bg-gray-700"
                                )}
                                onClick={subItem?.onClick}
                              >
                                {subItem.label}
                              </DisclosureButton>
                            </li>
                          ))}
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                )
              ) : (
                <div className="px-3 py-2 text-sm font-bold dark:text-white">
                  {item.label}
                </div>
              )}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default NavList;
