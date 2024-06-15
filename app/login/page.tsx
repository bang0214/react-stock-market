"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "@/lib/api/request";
import { useState } from "react";
import useUserStore from "@/lib/store/useUserStore";
import { useRouter } from "next/router";
import { Alert } from "@/components/ui/alert";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userStore = useUserStore();
  const router = useRouter();
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    const response = await login(username, password);
    if (response === true) {
      console.log("登录成功");
      userStore.login(username);
      router.push("/dashboard");
    } else {
      console.log("登录失败");
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="mx-auto max-w-sm w-1/3">
        <CardHeader>
          <CardTitle className="text-2xl">登录</CardTitle>
          <CardDescription>输入用户名和密码以登录</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="text" className="font-bold">
                用户名
              </Label>
              <Input placeholder="" required onChange={handleUsernameChange} />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password" className="font-bold">
                  密码
                </Label>
              </div>
              <Input
                id="password"
                type="password"
                required
                onChange={handlePasswordChange}
              />
            </div>
            <Button type="submit" className="w-full" onClick={handleLogin}>
              Login
            </Button>
            {/* <Button variant="outline" className="w-full">
              Login with Google
            </Button> */}
          </div>
          <div className="mt-4 text-center text-sm">
            没有账号？{" "}
            <Link href="#" className="underline">
              注册
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
