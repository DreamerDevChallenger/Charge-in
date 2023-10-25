"use client";

import { Metadata } from "next";

import DashboardProfilAccessories from "@/components/dashboard/house/profil/accessories";
import DashboardProfilHeader from "@/components/dashboard/house/profil/header";
import DashboardProfilInformation from "@/components/dashboard/house/profil/informations";
import DashboardProfilLink from "@/components/dashboard/house/profil/link-profil";
import { useAppSelector } from "@/redux/hooks";
import { selectUser } from "@/redux/selectors";
import DashboardProfilDiscount from "@/components/dashboard/house/profil/discount";
import DashboardProfilInstaller from "@/components/dashboard/house/profil/installer";
import DashboardProfilCharging from "@/components/dashboard/house/profil/charging";

export default function DashboardHouseInProgressProfil({
  params,
  children,
}: {
  params: { id: string };
  children: React.ReactNode;
}) {
  const { data } = useAppSelector(selectUser);

  const profilData = data.find((item) => item.id === JSON.parse(params.id));
  return (
    <>
      <DashboardProfilLink profilData={profilData} />
      <DashboardProfilHeader profilData={profilData} />
      <DashboardProfilInformation />
      <DashboardProfilCharging />
      <DashboardProfilInstaller />
      <DashboardProfilDiscount />
      <DashboardProfilAccessories />
      <DashboardProfilLink profilData={profilData} />
    </>
  );
}
