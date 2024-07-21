import React, { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

type Action =
  | {
      type: "toggleSmMenu";
    }
  | {
      type: "toggleLgMenu";
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
  children: React.ReactNode;
};

const SideMenu: React.ForwardRefRenderFunction<
  SideMenuHandler,
  SideMenuProps
> = ({ header, menu, children }, innerRef) => {
  const [menuOpen, setMenuOpen] = useLocalStorage("menuOpen", true);
  const [state, dispatch] = React.useReducer(reducer, {
    showSmMenu: false,
    showLgMenu: menuOpen,
  });

  const toggleMenu = () => {
    dispatch({ type: "toggleLgMenu" });
    window.scrollTo(0, 0);
    setMenuOpen(!state.showLgMenu);
  };

  const toggleSmMenu = () => {
    dispatch({ type: "toggleSmMenu" });
    window.scrollTo(0, 0);
  };

  React.useImperativeHandle(innerRef, () => ({
    toggleMenu,
    toggleSmMenu,
  }));

  return (
    <div className="flex min-h-full w-full min-w-min flex-col">
      {header}

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
        <div className="absolute bottom-0 top-14 z-50 w-full bg-white shadow dark:bg-gray-800 lg:hidden flex">
          {menu}
        </div>
      </Transition>
      <div className="flex w-full flex-auto">
        {/* desktop sidemenu start*/}
        <Transition
          as={Fragment}
          show={state.showLgMenu}
          enter="transform transition duration-300"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition duration-200 ease-in-out"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="hidden w-[320px] shadow lg:flex">{menu}</div>
        </Transition>
        {/* desktop sidemenu end*/}
        <div className="grow">{children}</div>
      </div>
    </div>
  );
};

export default React.forwardRef(SideMenu);
