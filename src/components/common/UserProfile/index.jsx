import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
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
        <DropdownMenuGroup>
          <DropdownMenuItem asChild className="p-5 front-bold">
            <Link to="/auth/login" className="font-normal text-xs">
              Login
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="p-5">
            <Link to="/track-order" className="font-normal text-xs">
              Track Order
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="p-5">
            <Link to="/activate-gift-card" className="font-normal text-xs">
              Activate Gift Card
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild className="p-5">
            <Link to="/my-account" className="font-normal text-xs">
              Check Balance
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="p-5">
            <Link to="/order-history" className="font-normal text-xs">
              Good earth Registry
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfile;
