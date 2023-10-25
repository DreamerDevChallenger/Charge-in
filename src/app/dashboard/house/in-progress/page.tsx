"use client";

import DashboardHouseTable from "@/components/dashboard/house/table";
import PageTitle from "@/components/materials/page-title";
import { House, HouseOutlined } from "@mui/icons-material";

export default function DashboardHouseInProgress() {
  return (
    <>
      <PageTitle icon={HouseOutlined}>Maison</PageTitle>
      <DashboardHouseTable />
    </>
  );
}
