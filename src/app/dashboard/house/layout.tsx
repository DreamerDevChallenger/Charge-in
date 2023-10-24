"use client";

import PageTitle from "@/components/materials/page-title";
import { HomeLargeIcon } from "@/utils/icon";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
