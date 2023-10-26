"use client";

import DashboardHouseHeader from "@/components/dashboard/house/header";
import DashboardHouseTable from "@/components/dashboard/house/table";
import PageTitle from "@/components/materials/page-title";
import { House, HouseOutlined } from "@mui/icons-material";

export default function DashboardHouseInProgress() {
  return (
    <>
      <DashboardHouseHeader>
        <PageTitle icon={HouseOutlined}>Maison</PageTitle>
      </DashboardHouseHeader>
      <DashboardHouseTable />
    </>
  );
}
