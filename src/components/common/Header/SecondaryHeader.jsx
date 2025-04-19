import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSubContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDownIcon, ChevronRight, Slash } from "lucide-react";
import React from "react";

const SecondaryHeader = () => {
  return (
    <div className="p-4 shadow flex justify-between px-40">
      <BreadcrumbItem>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-xs">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/components" className="text-xs">
              Components
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </BreadcrumbItem>
      <div className="flex items-center">
        <span>Sort by :</span>
        <Select>
          <SelectTrigger className="border-none border-0 shadow-none">
            <SelectValue placeholder="our creation" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="curation">Our Creation</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="lowest">Price: Lowest First</SelectItem>
              <SelectItem value="highest">Price: Highest First</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SecondaryHeader;
