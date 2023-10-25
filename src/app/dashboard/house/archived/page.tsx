"use client";

import DashboardHouseTable from "@/components/dashboard/house/table";
import PageTitle from "@/components/materials/page-title";
import { HouseOutlined } from "@mui/icons-material";

export default function DashboardHouseArchived() {
  return (
    <>
      <PageTitle icon={HouseOutlined}>Maison</PageTitle>
      <DashboardHouseTable />
    </>
  );
}
