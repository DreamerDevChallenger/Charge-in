import HeaderDashboard from "@/components/dashboard/header";
import Overlay from "@/components/dashboard/overlay";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charge-in | Dashboard",
};

export default function Dashboard() {
  return (
    <>
      <main className="main-dashboard">
        <HeaderDashboard />
      </main>
      <Overlay />
    </>
  );
}
