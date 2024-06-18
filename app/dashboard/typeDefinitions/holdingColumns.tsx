"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export type BackHoldingInfo = {
  Code: string;
  AVG_Cost: number;
  Amount: number;
  Total_Cost: number;
};

export type HoldingInfo = {
  Code: string;
  Name: string;
  BuyPrice: number;
  CurrentPrice: number;
  Amount: number;
  Profit: number;
};

export const holdingColumns: ColumnDef<HoldingInfo>[] = [
  {
    accessorKey: "Code",
    header: "代码",
  },
  {
    accessorKey: "Name",
    header: "名称",
  },
  {
    accessorKey: "BuyPrice",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          买入价格
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }: { row: any }) => {
      const buyPrice = row.getValue("BuyPrice");
      return <span>{buyPrice.toFixed(2)}</span>;
    },
  },
  {
    accessorKey: "CurrentPrice",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          当前价格
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "Amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          持仓数量
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "Profit",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          盈亏
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }: { row: any }) => {
      const profit = row.getValue("Profit");
      const color = profit > 0 ? "text-red-500" : "text-green-500";
      return <span className={color}>{profit.toFixed(2)}</span>;
    },
  },
];
