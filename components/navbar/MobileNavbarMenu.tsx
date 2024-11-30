"use client";

import { MobileNavbarMenuProps } from "@/types";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { createPortal } from "react-dom";
import Logo from "./Logo";
import NavbarRoutes from "./NavbarRoutes";

const MobileNavbarMenu = ({ session }: MobileNavbarMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div className="hover:bg-gray-200 rounded-full px-3 py-[0.5px]">
      <button onClick={toggleOpen}>
        <Menu className="size-8 " />
      </button>
      {isOpen &&
        createPortal(
          <div className="fixed top-0 flex flex-col h-full w-64 gap-y-4 ring-0 bg-gray-100 p-5">
            <div className="flex items-center justify-between">
              <Logo />
              <button onClick={toggleOpen} className="rounded-md bg-gray-200">
                <X className="size-10" />
              </button>
            </div>
            <div className="border-b"></div>
            <div className="flex">
              <NavbarRoutes isVertical session={session} />
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default MobileNavbarMenu;
