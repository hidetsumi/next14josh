"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ListFilter } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const FILTER_MENU = {
  SORT: [
    { value: "price_desc", name: "Price: Low to High" },
    { value: "price_asc", name: "Price: High to Low" },
    { value: "none", name: "None" },
  ],
} as const;

// const countentVwMenuDropdown =

export const FilterButton = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const actualSort = searchParams.get("sort");
  return (
    <div className="flex items-center w-full md:w-auto">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="group flex gap-2 w-full">
            <ListFilter width={18} className="group-hover:text-gray-500" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-screen px-4 -px-4"
          // className="content-dropdown-menu-vW"
          side="bottom"
          align="end"
        >
          <DropdownMenuLabel> Sort </DropdownMenuLabel>
          {FILTER_MENU.SORT.map((option, key) => (
            <DropdownMenuItem
              key={key}
              onClick={() => {
                router.push(
                  `${pathname}?${createQueryString("sort", option.value)}`,
                );
              }}
              className={cn("text-gray-300", {
                "text-gray-900 bg-gray-100": option.value === actualSort,
                "text-gray-500": option.value !== actualSort,
              })}
            >
              {option.name}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Filters</DropdownMenuLabel>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
