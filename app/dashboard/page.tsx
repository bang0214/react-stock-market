"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { stockInfo, useColumns } from "./typeDefinitions/columns";
import { DataTable } from "@/components/ui/data-table";
import { fetchStockData } from "@/lib/api/request";
import { useState, useEffect, useCallback, useMemo } from "react";
import { initialPrices } from "@/lib/utils";
import { useRouter } from "next/navigation";
export default function Dashboard() {
  const [data, setData] = useState<stockInfo[]>([]);
  const [filteredData, setFilteredData] = useState<stockInfo[]>([]);
  const [selectedTab, setSelectedTab] = useState("总览");
  const [countdown, setCountdown] = useState(5);
  const router = useRouter();
  const columns = useColumns();

  const fetchData = async () => {
    const data = await fetchStockData();
    const processedData = data.map((stock: stockInfo) => {
      const initialPrice = initialPrices[stock.Code];
      const changePrice = stock.Price - initialPrice;
      const changePercentage = (changePrice / initialPrice) * 100;
      return {
        ...stock,
        ChangePrice: changePrice,
        ChangePercentage: changePercentage,
      };
    });
    setData(processedData);
  };

  useEffect(() => {
    fetchData();
    router.refresh();
  }, []);

  useEffect(() => {
    const filteredData = data.filter((stock) => {
      const codePrefix = stock.Code.charAt(0);
      return (
        (codePrefix === "6" && selectedTab === "沪市") ||
        (codePrefix === "3" && selectedTab === "深市") ||
        (codePrefix === "0" && selectedTab === "创业板")
      );
    });
    setFilteredData(filteredData);
  }, [data, selectedTab]);

  useEffect(() => {
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
    return () => clearInterval(interval);
  }, []);

  const tabs = ["总览", "沪市", "深市", "创业板"];

  return (
    <>
      <div className="container mx-auto mt-4">
        <h1 className="text-2xl font-bold mb-4">
          大盘行情
          <span className="text-sm text-gray-500 ml-2">
            {countdown}秒后更新
          </span>
        </h1>
        <Tabs defaultValue="总览" className="">
          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger value={tab} onClick={() => setSelectedTab(tab)}>
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent value={tab} className="w-full">
              <DataTable
                columns={columns}
                data={tab === "总览" ? data : filteredData}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
}
