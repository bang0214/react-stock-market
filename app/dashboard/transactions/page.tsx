"use client";
import { useEffect, useState } from "react";
import useUserStore from "@/lib/store/useUserStore";
import { DataTable } from "@/components/ui/data-table";
import {
  TransactionInfo,
  transactionColumns,
  BackTransactionInfo,
} from "../typeDefinitions/transactionColumns";
import { fetchTransactions } from "@/lib/api/request";
import { stockNameList } from "@/lib/utils";

export default function Transactions() {
  const [data, setData] = useState<TransactionInfo[]>([]);
  const username = useUserStore((state) => state.username);
  const columns = transactionColumns;

  const fetchData = async () => {
    if (!username) {
      return;
    }
    const transactions = await fetchTransactions(username);
    const getStatusMessage = (status: number) => {
      switch (status) {
        case 0:
          return "错误";
        case 1:
          return "委托成功";
        case 2:
          return "交易成功";
        case 3:
          return "废单";
        case 4:
          return "账户余额不足";
        case 5:
          return "持仓余额不足";
        default:
          return "未知状态";
      }
    };
    const newData: TransactionInfo[] = transactions.map(
      (transaction: BackTransactionInfo) => {
        const name = stockNameList.find(
          (stock) => stock.Code === transaction.Code
        )?.Name;

        return {
          Code: transaction.Code,
          Name: name,
          Direction: transaction.Direction === 0 ? "买入" : "卖出",
          KonckPrice: transaction.Price,
          Amount: transaction.Amount,
          State: getStatusMessage(transaction.State),
          TradeTime: transaction.TradeTime,
        };
      }
    );
    setData(newData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-4">交易记录</h1>
      <DataTable columns={columns} data={data}></DataTable>
    </div>
  );
}
