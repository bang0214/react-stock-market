"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type stockInfo = {
  Code: string;
  Name: string;
  Price: number;
  ChangePrice: number;
  ChangePercentage: number;
};

export const columns: ColumnDef<stockInfo>[] = [
  {
    accessorKey: "Code",
    header: "代码",
  },
  {
    accessorKey: "Name",
    header: "名称",
  },
  {
    accessorKey: "Price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          最新价格
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "ChangePrice",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          涨跌
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }: { row: any }) => {
      const changePrice = row.getValue("ChangePrice");
      const color = changePrice > 0 ? "text-red-500" : "text-green-500";
      return <span className={color}>{changePrice.toFixed(2)}</span>;
    },
  },
  {
    accessorKey: "ChangePercentage",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          涨跌幅
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }: { row: any }) => {
      const changePercentage = row.getValue("ChangePercentage");
      const color = changePercentage > 0 ? "text-red-500" : "text-green-500";
      return <span className={color}>{changePercentage.toFixed(2)}%</span>;
    },
  },
];
