import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-700 text-white min-h-screen">
      <nav className="flex flex-col p-4 space-y-2">
        <Link
          href="/dashboard"
          className="block py-2 px-4 hover:bg-gray-600 rounded"
        >
          Market Overview
        </Link>
        <Link
          href="/dashboard/portfolio"
          className="block py-2 px-4 hover:bg-gray-600 rounded"
        >
          Portfolio
        </Link>
        <Link
          href="/dashboard/transaction-history"
          className="block py-2 px-4 hover:bg-gray-600 rounded"
        >
          Transaction History
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
