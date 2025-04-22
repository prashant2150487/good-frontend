import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import React from "react";

const SearchInput = ({ setShowSearchInput }) => {
  return (
    <div className="fixed top-50 border-2 w-full z-4">
      <div className="shadow-md p-5 ">
        <div className="relative  w-fit mx-auto">
          <Input
            placeholder="looking for something ?"
            type="text"
            className="w-xl rounded-none p-7 pl-18 pr-20"
          />
          <Search className="absolute top-5 left-9 size-5 text-[#4c4c4c]" />
          <span className="absolute top-5 right-9 text-xs cursor-pointer text-[#4c4c4c]">
            View ALL Result
          </span>
          <X
            onClick={() => setShowSearchInput(false)}
            className="absolute top-4 -right-9 text-[#4c4c4c] cursor-pointer"
          />
        </div>
      </div>
      <div>
        <span className="text-xs text-[#191919]">POPULAR SEARCHES</span>
        <div>
          <Badge variant="outlined" className="rounded-none px-2 py-1 flex gap-1 items-center bg-[#F7F7F7] border-0 font-normal text-[#191919]"> 
            <Search className="text-[#4c4c4c] cursor-pointer size-6" />
            Cushion
          </Badge>
        </div>
      </div>
    </div> 
  );
};

export default SearchInput;
