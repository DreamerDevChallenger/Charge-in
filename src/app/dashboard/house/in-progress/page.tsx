import DashboardHouseHeader from "@/components/dashboard/house/header";
import DashboardHouseTable from "@/components/dashboard/house/table";
import PageTitle from "@/components/materials/page-title";
import { HomeLargeIcon } from "@/utils/icon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charge-in | House - In Progress",
};

export default function DashboardHouseInProgress() {
  return (
    <>
      <DashboardHouseHeader />
      <DashboardHouseTable />
    </>
  );
}
