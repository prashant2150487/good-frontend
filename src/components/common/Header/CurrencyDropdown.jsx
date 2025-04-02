import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { SelectLabel } from "@radix-ui/react-select";
import React from "react";

const CurrencyDropdown = () => {
  return (
    <Select>
      <SelectTrigger className="shadow-none border-none ring-0 text-[#9C7D50]">
        <SelectValue placeholder="INR"/>
      </SelectTrigger>
      <SelectContent className="border-none shadow-none hover:none bg-[#f9f8f5]">
        <SelectGroup>
          <SelectItem value="pineapple bg-white">INR</SelectItem>
          <Separator/>
          <SelectItem value="apple">USD</SelectItem>
          <SelectItem value="banana">GBP</SelectItem>
          <SelectItem value="blueberry">SGD</SelectItem>
          <SelectItem value="grapes">AED</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CurrencyDropdown;
