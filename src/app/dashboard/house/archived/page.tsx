import DashboardHouseTable from "@/components/dashboard/house/table";
import DashboardTitle from "@/components/dashboard/title";
import { HomeLargeIcon } from "@/utils/icon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charge-in | House - In Progress",
};

export default function DashboardHouseArchived() {
  return (
    <>
      <DashboardTitle icon={HomeLargeIcon} />
      <DashboardHouseTable />
    </>
  );
}
