import React from "react";
import { useLocation } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { BsChevronRight as ChevronRightIcon } from "react-icons/bs";
import { twMerge } from "tailwind-merge";
//components
import Icon from "../Icon";

export type NavItemObject = {
  label: string;
  path?: string;
  icon?: string;
  title?: boolean;
  list?: NavItemObject[];
};

export type NavListProps = {
  list: NavItemObject[];
};

const NavList: React.FC<NavListProps> = ({ list }) => {
  const location = useLocation();

  return (
    <nav className="bg-white px-4 py-6 dark:bg-gray-800 w-full">
      <ul>
        {list &&
          list.map((item, index) => (
            <li key={index}>
              {!item?.title ? (
                !item.list ? (
                  <a
                    href={item.path}
                    className={twMerge(
                      "flex w-full items-center justify-start gap-2 rounded p-3 font-semibold hover:bg-primary-50 dark:text-white dark:hover:bg-gray-700",
                      location.pathname === item.path
                        ? "bg-primary-50 dark:bg-gray-700"
                        : "",
                    )}
                  >
                    {item.icon && <Icon name={item.icon} size={20} />}
                    <span>{item.label}</span>
                  </a>
                ) : (
                  <Disclosure as="div">
                    {({ open }) => (
                      <>
                        <DisclosureButton
                          className={twMerge(
                            "flex w-full items-center gap-2 rounded p-3 text-left font-semibold hover:bg-primary-50 dark:text-white dark:hover:bg-gray-700",
                          )}
                        >
                          {item.icon && <Icon name={item.icon} size={20} />}
                          <span>{item.label}</span>
                          <ChevronRightIcon
                            className={twMerge(
                              open
                                ? "rotate-90 text-gray-500"
                                : "text-gray-400",
                              "ml-auto h-4 w-4 shrink-0",
                            )}
                            aria-hidden="true"
                          />
                        </DisclosureButton>
                        <DisclosurePanel as="ul" className="mt-1 px-2">
                          {item?.list?.map((subItem, index) => (
                            <li key={index}>
                              {/* 44px */}
                              <DisclosureButton
                                as="a"
                                href={subItem.path}
                                className={twMerge(
                                  "block rounded py-2 pl-9 pr-2 text-gray-700 hover:bg-primary-50 dark:text-white dark:hover:bg-gray-700",
                                  location.pathname === subItem.path &&
                                    "bg-primary-50 dark:bg-gray-700",
                                )}
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
