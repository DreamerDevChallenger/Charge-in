import DashboardHouseTable from "@/components/dashboard/house/table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charge-in | House - In Progress",
};

export default function DashboardHouseInProgress() {
  return <DashboardHouseTable />;
}
