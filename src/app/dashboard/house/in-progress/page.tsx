"use client";

import DashboardHouseTable from "@/components/dashboard/house/table";
import DashboardTitle from "@/components/dashboard/title";
import PageTitle from "@/components/materials/page-title";
import { HomeLargeIcon } from "@/utils/icon";

export default function DashboardHouseInProgress() {
  return (
    <>
      <DashboardTitle icon={HomeLargeIcon} />
      <DashboardHouseTable />
    </>
  );
}
