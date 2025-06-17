"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import DashboardStats from "@/components/dashboard/DashboardStats";
import DashboardCards from "@/components/dashboard/DashboardCard";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/cms-login");
    }
  }, []);

  return (
    <div className="flex">
      <main className="flex-1 bg-gray-100 min-h-screen p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
        <DashboardCards />
        <DashboardStats />
      </main>
    </div>
  );
};

export default Dashboard;
