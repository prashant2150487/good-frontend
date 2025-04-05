import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import React from "react";

const UserProfile = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <User size={20} className="hidden lg:block" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-sm font-bold text-[#191919] min-w-[171px] mr-7">
          <DropdownMenuLabel className="bg-red-100 p-4">Login</DropdownMenuLabel>
          <DropdownMenuLabel className="p-4">Track Oder</DropdownMenuLabel>
          <DropdownMenuLabel className="p-4">Activate Gift Card</DropdownMenuLabel>
          <DropdownMenuLabel className="p-4">Check Balance</DropdownMenuLabel>
          <DropdownMenuLabel className="p-4">Good Earth Registry</DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserProfile;
