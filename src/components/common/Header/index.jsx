import { Heart, Search, ShoppingBag, User } from "lucide-react";
import React from "react";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="w-md  flex justify-center">
        <Link>
        <img src={logo} alt="Logo" className="h-14" />

        </Link>
      </div>
      <div className="flex gap-9 bg-amber-500justify-center text-sm text-[#191919] px-2">
        <span>HOME</span>
        <span>APPAREL</span>
        <span>GIFTING</span>
        <span className="whitespace-nowrap">OUR WORLD</span>
      </div>

      <div className="flex w-md px-4 justify-between">
        <div className="flex items-center gap-1">
          <Search className="w-5" />
          <p className="text-xs">Search</p>
        </div>
        <div className="flex gap-4 items-center justify-end">
          <Heart />
          <User />
          <ShoppingBag />
        </div>
      </div>
    </header>
  );
};

export default Header;
