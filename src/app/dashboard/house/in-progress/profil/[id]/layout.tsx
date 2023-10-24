"use client";

import DashboardProfilHeader from "@/components/dashboard/house/profil/header";
import { useAppSelector } from "@/redux/hooks";
import { selectUser } from "@/redux/selectors";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const { data } = useAppSelector(selectUser);

  const profilData = data.find((item) => item.id === JSON.parse(params.id));

  return (
    <>
      <DashboardProfilHeader profilData={profilData} />
      {children}
    </>
  );
}
