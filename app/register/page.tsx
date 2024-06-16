"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { register } from "@/lib/api/request";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPwdError, setConfirmPwdError] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const router = useRouter();
  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setConfirmPwdError(true);
      return;
    }
    const data = await register(username, password);
    if (data === true) {
      console.log("注册成功");
      router.push("/login");
    } else {
      setShowAlert(true);
      console.log("注册失败");
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      {showAlert && (
        <Alert
          variant="destructive"
          className="absolute top-0 right-0 m-4 w-1/3"
        >
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>注册失败</AlertTitle>
          <AlertDescription>用户名为空或冲突</AlertDescription>
        </Alert>
      )}
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">注册</CardTitle>
          <CardDescription>输入用户名和密码</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label className="font-bold">用户名</Label>
            <Input
              id="username"
              type="email"
              required
              onChange={handleUsernameChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password" className="font-bold">
              密码
            </Label>
            <Input
              id="password"
              type="password"
              required
              onChange={handlePasswordChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password" className="font-bold">
              确认密码
            </Label>
            <div className="text-red-500">
              {confirmPwdError && "两次输入的密码不一致"}
            </div>
            <Input
              id="confirm-password"
              type="password"
              required
              onChange={handleConfirmPwdChange}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleSignUp}>
            Sign up
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
