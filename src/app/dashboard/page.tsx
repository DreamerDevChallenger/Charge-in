import FastAction from "@/components/dashboard/home/fast-action";
import DashboardObjectives from "@/components/dashboard/home/objective";
import DashboardStatistic from "@/components/dashboard/home/statistic";
import PageTitle from "@/components/materials/page-title";
import { FlashOutlinedIcon } from "@/utils/icon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charge-in | Dashboard",
};

export default function Dashboard() {
  return (
    <>
      <section>
        <PageTitle icon={FlashOutlinedIcon}>Tableau de bord</PageTitle>
      </section>
      <DashboardObjectives />
      <DashboardStatistic />
      <FastAction />
    </>
  );
}
