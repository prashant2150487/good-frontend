import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import React from "react";

const SearchInput = () => {
  return (
    <div className="fixed top-30 bg-amber-100 w-full ">
      <div className="shadow-md p-5">
        <div className="relative bg-amber-300 w-fit mx-auto">
          <Input  className="w-xl rounded-none p-5"/>
          <Search  className="absolute top-2 left-9"/>
          <span className="absolute top-3 right-4 text-xs">View ALL Result</span>
          <X className="absolute top-2 -right-9"/>
        </div>
      </div>
      <div></div>
    </div>
  );
};


export default SearchInput;
