import FastAction from "@/components/dashboard/home/fast-action";
import DashboardObjectives from "@/components/dashboard/home/objective";
import DashboardStatistic from "@/components/dashboard/home/statistic";
import PageTitle from "@/components/materials/page-title";

import { BoltOutlined } from "@mui/icons-material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charge-in | Dashboard",
};

export default function Dashboard() {
  return (
    <>
      <PageTitle icon={BoltOutlined}>Tableau de bord</PageTitle>
      <DashboardObjectives />
      <DashboardStatistic />
      <FastAction />
    </>
  );
}
