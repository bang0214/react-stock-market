"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { clsx } from "clsx";
import useUserStore from "@/lib/store/useUserStore";
import { logout } from "@/lib/api/request";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { CircleUser, Menu, Package2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
const Header = () => {
  const links = [
    {
      name: "Dashboard",
      title: "大盘行情",
      href: "/dashboard",
    },
    {
      name: "Holdings",
      title: "持仓详情",
      href: "/dashboard/holdings",
    },
    {
      name: "Transactions",
      title: "交易记录",
      href: "/dashboard/transactions",
    },
  ];
  const pathname = usePathname();
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const username = useUserStore((state) => state.username);
  const storeLogout = useUserStore((state) => state.userLogout);

  //如果cookie中存在isLoggedIn和username，则表示已登录，将其设置为store中的状态
  if (document.cookie.includes("isLoggedIn=true")) {
    const usernameRow = document.cookie
      .split("; ")
      .find((row) => row.startsWith("username="));

    if (usernameRow) {
      const username = usernameRow.split("=")[1];
      useUserStore.setState({ isLoggedIn: true, username });
    }
  }

  const handleLogout = async () => {
    if (username === null) return;
    storeLogout();
    await logout(username);
  };

  const router = useRouter();
  const handleLogin = () => {
    router.push("/login");
  };
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>

        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("transition-colors hover:text-foreground w-16", {
              "text-foreground": pathname === link.href,
              "text-muted-foreground": pathname !== link.href,
            })}
          >
            {link.title}
          </Link>
        ))}
      </nav>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            {/* <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            /> */}
          </div>
        </form>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>
              {isLoggedIn && username ? username : "游客"}
            </DropdownMenuLabel>
            {/* <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator /> */}
            <DropdownMenuItem onClick={isLoggedIn ? handleLogout : handleLogin}>
              {isLoggedIn ? "注销" : "登录"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
