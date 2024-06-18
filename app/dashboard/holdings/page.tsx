"use client";
import { fetchHoldings, fetchStockData } from "@/lib/api/request";
import {
  HoldingInfo,
  holdingColumns,
  BackHoldingInfo,
} from "../typeDefinitions/holdingColumns";
import { useEffect, useState } from "react";
import useUserStore from "@/lib/store/useUserStore";
import { DataTable } from "@/components/ui/data-table";
import { stockInfo } from "../typeDefinitions/columns";
export default function Holdings() {
  const [data, setData] = useState<HoldingInfo[]>([]);
  const [countdown, setCountdown] = useState(5);
  const username = useUserStore((state) => state.username);
  const columns = holdingColumns;
  const fetchData = async () => {
    if (!username) {
      return;
    }
    const holdings = await fetchHoldings(username);
    const stockData = await fetchStockData();

    const newData: HoldingInfo[] = holdings.map((holding: BackHoldingInfo) => {
      const stock = stockData.find(
        (stock: stockInfo) => stock.Code === holding.Code
      );
      return {
        Code: holding.Code,
        Name: stock.Name,
        BuyPrice: holding.AVG_Cost,
        CurrentPrice: stock.Price,
        Amount: holding.Amount,
        Profit: stock.Price * holding.Amount - holding.Total_Cost,
      };
    });

    setData(newData);
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          fetchData();
          return 5;
        } else {
          return prevCountdown - 1;
        }
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-4">
        持仓详情
        <span className="text-sm text-gray-500 ml-2">{countdown}秒后更新</span>
      </h1>
      <DataTable columns={columns} data={data}></DataTable>
    </div>
  );
}
