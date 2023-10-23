import type { Metadata } from "next";

import icon from "@/assets/icon.png";
import HeaderDashboard from "@/components/dashboard/header";

export const metadata: Metadata = {
  icons: { icon: icon.src },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="main-dashboard">
      <HeaderDashboard />
      {children}
    </main>
  );
}
