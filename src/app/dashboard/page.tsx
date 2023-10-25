"use client";

import FastAction from "@/components/dashboard/home/fast-action";
import DashboardObjectives from "@/components/dashboard/home/objective";
import DashboardStatistic from "@/components/dashboard/home/statistic";
import DashboardTitle from "@/components/dashboard/title";

import { FlashLargeIcon } from "@/utils/icon";

export default function Dashboard() {
  return (
    <>
      <DashboardTitle icon={FlashLargeIcon} />
      <DashboardObjectives />
      <DashboardStatistic />
      <FastAction />
    </>
  );
}
