import React, { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { twMerge } from "tailwind-merge";

type Action =
  | {
      type: "toggleSmMenu";
    }
  | {
      type: "toggleLgMenu";
    }
  | {
      type: "setLgMenu";
      menuOpen: boolean;
    };

type State = {
  showSmMenu: boolean;
  showLgMenu: boolean;
};

const reducer: React.Reducer<State, Action> = (state, action) => {
  if (action.type === "toggleSmMenu") {
    return {
      ...state,
      showSmMenu: !state.showSmMenu,
    };
  }
  if (action.type === "toggleLgMenu") {
    return {
      ...state,
      showLgMenu: !state.showLgMenu,
    };
  }
  return state;
};

export type SideMenuHandler = {
  toggleMenu: () => void;
  toggleSmMenu: () => void;
};

export type SideMenuProps = {
  header?: React.ReactNode;
  menu: React.ReactNode;
  menuType?: "static" | "fixed";
  children: React.ReactNode;
};

const SideMenu: React.ForwardRefRenderFunction<
  SideMenuHandler,
  SideMenuProps
> = ({ header, menu, menuType = "static", children }, innerRef) => {
  const [menuOpenState, setMenuOpenState] = useLocalStorage("menuOpen", true);
  const [state, dispatch] = React.useReducer(reducer, {
    showSmMenu: false,
    showLgMenu: menuType === "fixed" ? false : menuOpenState,
  });

  React.useImperativeHandle(innerRef, () => ({
    toggleMenu: () => {
      setMenuOpenState(!state.showLgMenu);
      dispatch({ type: "toggleLgMenu" });
      window.scrollTo(0, 0);
    },
    toggleSmMenu: () => {
      dispatch({ type: "toggleSmMenu" });
      window.scrollTo(0, 0);
    },
  }));

  React.useEffect(() => {
    dispatch({
      type: "setLgMenu",
      menuOpen: menuType === "fixed" ? false : menuOpenState,
    });
  }, [menuOpenState, menuType]);

  return (
    <>
      <div className="fixed top-0 z-50 w-full left-0 right-0">{header}</div>
      <div
        className={twMerge(
          "flex min-h-full w-full min-w-min flex-col pt-[56px]",
        )}
      >
        {/* mobile sidemenu start*/}
        <Transition
          as={Fragment}
          show={state.showSmMenu}
          enter="transform transition duration-300"
          enterFrom="-translate-y-0"
          enterTo="translate-y-full"
          leave="transform transition duration-200 ease-in-out"
          leaveFrom="translate-y-0"
          leaveTo="-translate-y-full"
        >
          <div className="absolute bottom-0 top-14 z-50 flex w-full bg-white shadow dark:bg-gray-900 lg:hidden">
            {menu}
          </div>
        </Transition>
        {/* mobile sidemenu end*/}
        {/* desktop sidemenu start*/}
        <div className="flex w-full flex-auto">
          <div
            className={twMerge(
              "hidden w-[320px] shadow dark:shadow-gray-800 dark:bg-gray-900 lg:flex fixed top-0 pt-[56px] left-0 z-40 bottom-0 transform transition duration-300",
              state.showLgMenu === true ? "translate-x-0" : "-translate-x-full",
            )}
          >
            {menu}
          </div>
          <div
            className={twMerge(
              "grow",
              state.showLgMenu === true
                ? menuType === "static"
                  ? "lg:pl-[320px]"
                  : ""
                : "",
            )}
          >
            {children}
          </div>
        </div>
        {/* desktop sidemenu end*/}
      </div>
    </>
  );
};

export default React.forwardRef(SideMenu);
