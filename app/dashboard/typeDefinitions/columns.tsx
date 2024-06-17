"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type stockInfo = {
  Code: string;
  Name: string;
  Price: number;
  ChangePrice: number;
  ChangePercentage: number;
};

const viewDetail = (code: string) => () => {
  const router = useRouter();
  router.push(`/dashboard/detail/${code}`);
};

// export const columns: ColumnDef<stockInfo>[] = [
//   {
//     accessorKey: "Code",
//     header: "代码",
//   },
//   {
//     accessorKey: "Name",
//     header: "名称",
//   },
//   {
//     accessorKey: "Price",
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//         >
//           最新价格
//           <ArrowUpDown className="ml-2 h-4 w-4" />
//         </Button>
//       );
//     },
//   },
//   {
//     accessorKey: "ChangePrice",
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//         >
//           涨跌
//           <ArrowUpDown className="ml-2 h-4 w-4" />
//         </Button>
//       );
//     },
//     cell: ({ row }: { row: any }) => {
//       const changePrice = row.getValue("ChangePrice");
//       const color = changePrice > 0 ? "text-red-500" : "text-green-500";
//       return <span className={color}>{changePrice.toFixed(2)}</span>;
//     },
//   },
//   {
//     accessorKey: "ChangePercentage",
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//         >
//           涨跌幅
//           <ArrowUpDown className="ml-2 h-4 w-4" />
//         </Button>
//       );
//     },
//     cell: ({ row }: { row: any }) => {
//       const changePercentage = row.getValue("ChangePercentage");
//       const color = changePercentage > 0 ? "text-red-500" : "text-green-500";
//       return <span className={color}>{changePercentage.toFixed(2)}%</span>;
//     },
//   },
//   {
//     id: "actions",
//     cell: ({ row }) => {
//       const stock = row.original;

//       return (
//         <Button
//           variant="ghost"
//           className="h-8 w-8 p-0"
//           onClick={viewDetail(stock.Code)}
//         >
//           <MoreHorizontal className="h-4 w-4" />
//           走势
//         </Button>
//       );
//     },
//   },
// ];

export const useColumns = () => {
  const router = useRouter();

  const viewDetail = (code: string) => () => {
    router.push(`/dashboard/detail/${code}`);
  };

  const columns: ColumnDef<stockInfo>[] = [
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
    {
      id: "actions",
      cell: ({ row }) => {
        const stock = row.original;

        return (
          <Button
            variant="ghost"
            className="h-8 w-8 p-0 hover:bg-slate-200"
            onClick={viewDetail(stock.Code)}
          >
            {/* <MoreHorizontal className="h-4 w-4" /> */}
            走势
          </Button>
        );
      },
    },
  ];
  return columns;
};
