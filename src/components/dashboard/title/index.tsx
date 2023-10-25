"use client";

import PageTitle from "@/components/materials/page-title";
import { FlashLargeIcon, HomeLargeIcon, PersonLargeIcon } from "@/utils/icon";

import { usePathname } from "next/navigation";
import styled from "styled-components";
import { useEffect, useState } from "react";

export default function DashboardTitle({
  children,
  icon,
}: {
  children?: React.ReactNode;
  icon: any;
}) {
  const pathname = usePathname();

  useEffect(() => {
    return () => {};
  }, []);

  const dashboard = pathname === "/dashboard";
  const house =
    pathname === "/dashboard/house/in-progress" ||
    pathname === "/dashboard/house/archived";

  const profil = pathname.includes("/dashboard/house/in-progress/profil");

  return (
    <PageTitle icon={icon}>
      {dashboard && "Tableau de bord"}
      {house && "Maisons"}

      {profil && `Profil : ${children}`}
    </PageTitle>
  );
}
