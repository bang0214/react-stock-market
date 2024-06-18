"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export type TransactionInfo = {
  Code: string;
  Name: string;
  Direction: string;
  KonckPrice: number;
  Amount: number;
  State: string;
  TradeTime: string;
};

export type BackTransactionInfo = {
  Amount: number;
  Code: string;
  Direction: number;
  KnockPrice: number;
  No: string;
  Price: number;
  State: number;
  TradeTime: string;
};

export const transactionColumns: ColumnDef<TransactionInfo>[] = [
  {
    accessorKey: "Code",
    header: "代码",
  },
  {
    accessorKey: "Name",
    header: "名称",
  },
  {
    accessorKey: "Direction",
    header: "方向",
  },
  {
    accessorKey: "KonckPrice",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          金额
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
          数量
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "State",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          状态
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "TradeTime",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          交易时间
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
