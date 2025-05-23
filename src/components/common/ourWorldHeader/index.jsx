import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { AlignJustify, X } from "lucide-react";
const OurWorldHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <header className="bg-white flex items-center justify-between px-10 py-3  border-gray-200">
        <div className="flex items-center justify-center gap-2">
          <div className="">
            {showMenu ? (
              <X onClick={handleMenuToggle} />
            ) : (
              <AlignJustify className="text-[#4c4c4c]" onClick={handleMenuToggle} />
            )}
          </div>
          <h1 className="text-xs font-normal text-[#191919] md:text-sm cursor-pointer">
            Our World
          </h1>
        </div>
        <Link to="/" className="">
          <img
            src={logo}
            alt="Our World Logo"
            className="w-74.29px md:w-[125px] h-[37.8px]"
          />
        </Link>
        <Link
          to="/our-world"
          className="text-[#191919] hover:text-gold text-xs md:text-sm font-normal border border-transparent hover:border-b hover:border-b-gold"
        >
          SHOP
        </Link>
      </header>
    </>
  );
};

export default OurWorldHeader;
