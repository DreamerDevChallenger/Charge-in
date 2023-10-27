import DashboardHouseHeader from "@/components/dashboard/house/header";
import DashboardHouseTable from "@/components/dashboard/house/table";
import PageTitle from "@/components/materials/page-title";
import { HouseOutlined } from "@mui/icons-material";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charge-in | House In Progress",
};

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
