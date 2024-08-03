import React, { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import Button, { ButtonProps } from "../Button";
import {
  Dialog,
  DialogTitle,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";

export type ModalButton = ButtonProps & {
  label: string;
  className?: string;
  onClick: () => void;
};

export type ModalHandler = {
  show: () => void;
  hide: () => void;
};

export type ModalProps = {
  open?: boolean;
  size?: "md" | "lg" | "xl" | "full";
  title: string;
  children: React.ReactNode;
  buttons?: ModalButton[];
  className?: {
    header?: string;
    footer?: string;
  };
};

const Modal: React.ForwardRefRenderFunction<ModalHandler, ModalProps> = (
  { open = false, title, buttons, children, className, size = "md" },
  innerRef,
) => {
  const [isOpen, setIsOpen] = React.useState(open);

  const show = () => setIsOpen(true);
  const hide = () => setIsOpen(false);

  React.useImperativeHandle(innerRef, () => ({
    show,
    hide,
  }));

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={hide}>
          <TransitionChild
            as={Fragment}
            enter="duration-300 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25 dark:bg-gray-500/85" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div
              className={twMerge(
                "flex min-h-full items-center justify-center text-center",
                size === "full" ? "p-0" : "p-4",
              )}
            >
              <TransitionChild
                as={Fragment}
                enter="duration-300 ease-out"
                enterFrom="scale-95 opacity-0"
                enterTo="scale-100 opacity-100"
                leave="duration-200 ease-in"
                leaveFrom="scale-100 opacity-100"
                leaveTo="scale-95 opacity-0"
              >
                <DialogPanel
                  className={twMerge(
                    "flex w-full max-w-md transform flex-col overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-gray-800",
                    size === "md" && "max-w-md",
                    size === "lg" && "max-w-lg",
                    size === "xl" && "max-w-xl",
                    size === "full" && "h-screen max-w-full rounded-none",
                  )}
                >
                  <DialogTitle
                    as="div"
                    className={twMerge(
                      "text-lg font-medium leading-6 text-gray-900 dark:text-white",
                      className?.header,
                    )}
                  >
                    {title}
                  </DialogTitle>
                  <div className="mt-2 grow text-sm text-gray-500 dark:text-gray-400">
                    {children}
                  </div>

                  <div
                    className={twMerge(
                      "mt-4 flex justify-end gap-2",
                      className?.footer,
                    )}
                  >
                    {/* START buttons */}
                    {buttons &&
                      buttons.map(
                        (
                          {
                            className: buClassName,
                            onClick: buOnClick,
                            label: buLabel,
                            ...buRest
                          }: ModalButton,
                          i: number,
                        ) => (
                          <Button
                            key={i}
                            type="button"
                            className={twMerge(buClassName)}
                            onClick={buOnClick || hide}
                            {...buRest}
                          >
                            {buLabel}
                          </Button>
                        ),
                      )}
                    {/* END buttons */}
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default React.forwardRef(Modal);
