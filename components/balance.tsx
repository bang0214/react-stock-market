"use client";

import { Badge } from "@/components/ui/badge";

import useUserStore from "@/lib/store/useUserStore";
export default function Balance() {
  const balance = useUserStore((state) => state.balance);
  return balance !== -1 ? <Badge variant="outline">{balance}</Badge> : null;
}
