import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import React from "react";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import CurrencyDropdown from "./CurrencyDropdown";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
const Header = () => {
  return (
    <header className="flex items-center justify-between px-4">
      <Menu className="lg:hidden" />
      <div className="w-md justify-center hidden lg:flex">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-13" />
        </Link>
      </div>
      <div className="flex gap-9 justify-center text-sm text-[#191919] px-2 text-semibold">
        <div className="lg:hidden">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-13" />
          </Link>
        </div>
        <div className="hidden lg:flex gap-9 text-sm text-[#191919] px-2 text-semibold">
          <span>HOME</span>
          <span>APPAREL</span>
          <span>GIFTING</span>
          <span className="whitespace-nowrap">OUR WORLD</span>
        </div>
      </div>

      <div className="flex lg:w-md lg:px-4 gap-4 justify-center lg:justify-between">
        <div className="flex items-center gap-1">
          <Search className="w-5" />
          <p className="text-xs hidden lg:block">Search</p>
        </div>
        <div className="flex gap-4 items-center justify-end">
          <div className="hidden lg:flex">
            <CurrencyDropdown />
          </div>
          <Heart size={20} className="hidden lg:block" />
          <User size={20} className="hidden lg:block" />

          <Drawer direction="right">
            <DrawerTrigger>
              <ShoppingBag size={20} className="cursor-pointer"/>
            </DrawerTrigger>
            <DrawerContent className="w-fit border-none">
              <div className="w-full h-full">
                <DrawerHeader className="bg-[#4C4C4C] flex">
                  <DrawerTitle className="text-white text-sm ">MINI BAG (1) ITEMS</DrawerTitle>
                  <DrawerClose>
                    <X className="text-white"/>
                  </DrawerClose>
                </DrawerHeader>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Header;
