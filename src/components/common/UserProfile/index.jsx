import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <User size={20} className="hidden lg:block" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-sm font-bold text-[#191919] min-w-[171px] mr-7">
        <Link to="/login">
          <DropdownMenuLabel className="bg-red-100 p-4">
            Login
          </DropdownMenuLabel>
        </Link>
        <Link to="/track-order">
          <DropdownMenuLabel className="p-4">Track Order</DropdownMenuLabel>
        </Link>
        <Link to="/activate-gift-card">
          <DropdownMenuLabel className="p-4">
            Activate Gift Card
          </DropdownMenuLabel>
        </Link>

        <Link to="/check-balance">
          <DropdownMenuLabel className="p-4">Check Balance</DropdownMenuLabel>
        </Link>

        <Link to="/registry">
          <DropdownMenuLabel className="p-4">
            Good Earth Registry
          </DropdownMenuLabel>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfile;
