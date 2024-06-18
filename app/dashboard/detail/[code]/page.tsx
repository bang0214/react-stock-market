"use client";
import { fetchStockDetail, fetchBalance } from "@/lib/api/request";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";
import { stockNameList } from "@/lib/utils";
import { initialPrices } from "@/lib/utils";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import clsx from "clsx";
import { trade } from "@/lib/api/request";
import useUserStore from "@/lib/store/useUserStore";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Detail({ params }: { params: { code: string } }) {
  const [stockDetail, setStockDetail] = useState([{}]);
  const [countdown, setCountdown] = useState(5);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [tradeDirection, setTradeDirection] = useState<"buy" | "sell">("buy");
  const [tradePrice, setTradePrice] = useState<number | null>(null);
  const [tradeAmount, setTradeAmount] = useState<number | null>(null);
  const [tradeStatus, setTradeStatus] = useState(0);
  const router = useRouter();
  const fetchData = async () => {
    const res: number[] = await fetchStockDetail(params.code);
    if (Array.isArray(res)) {
      const data = res.map((value: number, index: number) => ({
        index,
        price: value,
      }));
      setStockDetail(data);
      setCurrentPrice(data[data.length - 1].price);
    } else {
      console.error("fetchStockDetail did not return an array:", res);
    }
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

  const username = useUserStore((state) => state.username);

  const handleTrade = async () => {
    if (!username) {
      router.push("/login");
    } else if (!tradePrice || !tradeAmount) {
      alert("请输入价格和数量");
      return;
    } else {
      const res = await trade(
        username,
        params.code,
        tradeDirection,
        tradePrice,
        tradeAmount
      );
      setTradeStatus(res);
      const balance = await fetchBalance(username);
      useUserStore.setState({ balance });
    }
  };

  const getStatusMessage = () => {
    switch (tradeStatus) {
      case 0:
        return "系统无用户/用户名不存在/股票代码不存在等情况";
      case 1:
        return "委托成功。买入价低于最新价，或卖出价高于最新价，只记录委托成功，后续不会自动成交";
      case 2:
        return "交易成功。以最新价买入或卖出";
      case 3:
        return "废单。买入价或卖出价超出价格变动范围";
      case 4:
        return "账户余额不足，账户余额不支持当次交易";
      case 5:
        return "持仓余额不足，持仓数量不支持当次交易";
      default:
        return "未知错误";
    }
  };
  const initialPrice = initialPrices[params.code];
  const name = stockNameList.find((stock) => stock.Code === params.code)?.Name;

  return (
    <div className="container mx-auto mt-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">
          {name}:{params.code}
          <span className="text-sm text-gray-500 ml-2">
            {countdown}秒后更新
          </span>
        </h1>
      </div>

      <div className="mt-4">
        <div className="flex justify-start">
          <div>
            <h2 className="text-lg font-bold">当前价格</h2>
            <p className="text-3xl font-bold text-[#3498DB]">{currentPrice}</p>
          </div>
          <div className="ml-8">
            <h2 className="text-lg font-bold">涨跌值</h2>
            <p
              className={clsx("text-3xl font-bold", {
                "text-red-500": currentPrice - initialPrice > 0,
                "text-green-500": currentPrice - initialPrice < 0,
              })}
            >
              {(currentPrice - initialPrice).toFixed(2)}
            </p>
          </div>
          <div className="ml-8">
            <h2 className="text-lg font-bold">涨跌幅</h2>
            <p
              className={clsx("text-3xl font-bold", {
                "text-red-500": currentPrice - initialPrice > 0,
                "text-green-500": currentPrice - initialPrice < 0,
              })}
            >
              {((currentPrice - initialPrice) / initialPrice).toFixed(2)}%
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Sheet>
          <SheetTrigger asChild>
            <Button>下单交易</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>下单交易</SheetTitle>
              <SheetDescription>
                选择买入或卖出，并输入价格和数量
              </SheetDescription>
            </SheetHeader>
            <div className="mt-4">
              <Tabs
                defaultValue="buy"
                onValueChange={(value) =>
                  setTradeDirection(value as "buy" | "sell")
                }
              >
                <TabsList>
                  <TabsTrigger value="buy">买入</TabsTrigger>
                  <TabsTrigger value="sell">卖出</TabsTrigger>
                </TabsList>
                <div className="flex flex-col space-y-2 mt-4">
                  <input
                    type="number"
                    placeholder="价格"
                    step={0.01}
                    value={tradePrice || ""}
                    onChange={(e) => setTradePrice(Number(e.target.value))}
                    className="px-4 py-2 border rounded"
                  />

                  <input
                    type="number"
                    placeholder="数量"
                    step={10}
                    value={tradeAmount || ""}
                    onChange={(e) => setTradeAmount(Number(e.target.value))}
                    className="px-4 py-2 border rounded"
                  />

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        onClick={handleTrade}
                        variant="outline"
                        color="green"
                        className="px-4 py-2 mt-4"
                      >
                        提交
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>交易状态</AlertDialogTitle>
                        <AlertDialogDescription>
                          {getStatusMessage()}
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>关闭</AlertDialogCancel>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </Tabs>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <ResponsiveContainer width="100%" height={500} className="mt-8">
        <LineChart
          data={stockDetail}
          margin={{
            top: 10,
            right: 20,
            left: 20,
            bottom: 10,
          }}
        >
          {/* <CartesianGrid /> */}
          <XAxis dataKey="index">
            <Label value="获取时刻" offset={-5} position="insideBottom" />
          </XAxis>
          <YAxis
            label={{ value: "价格", position: "insideLeft", offset: -20 }}
            type="number"
            domain={[(dataMin: number) => (dataMin * 29) / 30, "auto"]}
          />
          <Tooltip />

          <Legend verticalAlign="top" height={36} />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#3498DB"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
