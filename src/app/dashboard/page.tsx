import DashboardObjectives from "@/components/dashboard/home/objective";
import Icon from "@/components/materials/icon";
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
        <PageTitle>Tableau de bord</PageTitle>
      </section>
      <DashboardObjectives />
    </>
  );
}
