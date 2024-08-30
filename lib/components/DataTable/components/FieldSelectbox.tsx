import React, { Fragment } from "react";
import { AiFillPlusCircle, AiOutlineCheck as CheckIcon } from "react-icons/ai";
import { twMerge } from "tailwind-merge";
import {
  offset,
  flip,
  shift,
  autoUpdate,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  useFloating,
} from "@floating-ui/react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { DataTableContext } from "../contexts/DataTableContext";
import type { DataTableField } from "../libs/type";

const FieldSelectbox = <DataType extends object>() => {
  const { fields, state, dispatch } = React.useContext(DataTableContext);
  //useFloating
  const { refs, x, y, strategy, floatingStyles, context } = useFloating({
    open: true,
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate,
    // placement: "bottom-end",
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  return (
    <Listbox
      as="div"
      className="absolute top-2 right-2"
      value={fields.filter((f) => state.DTShowFields.includes(f.key))}
      multiple
      onChange={(opt: DataTableField<DataType>[]) => {
        const keys = opt.map((o) => o.key);
        dispatch({
          type: "SET_FIELD",
          fields:
            opt.length === 0
              ? fields.every((f) => !Boolean(f?.default))
                ? fields
                : fields.filter((f) => Boolean(f?.default) === true)
              : fields.filter((f) => keys.includes(f.key)),
        });
      }}
      ref={refs.setReference}
      {...getReferenceProps()}
    >
      <ListboxButton className="inline-flex justify-between !p-0 focus:outline-none">
        <AiFillPlusCircle
          className="w-5 h-5 text-gray-400 cursor-pointer"
          aria-hidden="true"
        />
      </ListboxButton>
      <Transition
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="scale-95 transform opacity-0"
        enterTo="scale-100 transform opacity-100"
        leave="transition duration-75 ease-in"
        leaveFrom="scale-100 transform opacity-100"
        leaveTo="scale-95 transform opacity-0"
      >
        <ListboxOptions
          anchor="bottom"
          className="z-[999] mt-2 inline-block w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps({
            style: {
              position: strategy,
              top: y ?? "",
              left: x ?? "",
            },
          })}
        >
          <div className="flex flex-col px-1 py-1">
            {fields.map((opt: DataTableField<DataType>) => (
              <ListboxOption
                key={opt.key}
                className={twMerge(
                  "relative flex justify-between px-3 py-2 text-black cursor-pointer select-none hover:bg-primary-100"
                )}
                value={opt}
              >
                <>
                  <span className="pl-6">{opt.label}</span>
                  {state.DTShowFields?.includes(opt.key) && (
                    <span
                      className={twMerge(
                        "absolute inset-y-0 left-0 flex items-center pl-3 text-primary-600"
                      )}
                    >
                      <CheckIcon className="w-5 h-4" aria-hidden="true" />
                    </span>
                  )}
                </>
              </ListboxOption>
            ))}
          </div>
        </ListboxOptions>
      </Transition>
    </Listbox>
  );
};

export default FieldSelectbox;
