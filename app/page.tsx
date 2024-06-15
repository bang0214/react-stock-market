import Link from "next/link";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">欢迎来到股票交易系统</h1>
        <p className="text-lg mb-8">请选择浏览模式</p>
        <div className="flex justify-center">
          <Link href="/dashboard">
            <Button className="text-white font-bold py-2 px-4 mr-6">
              游客
            </Button>
          </Link>
          <Link href="/login">
            <Button className="text-white font-bold py-2 px-4 ">登录</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
