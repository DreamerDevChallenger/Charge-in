"use client";

import DashboardTitle from "@/components/dashboard/title";
import styled from "styled-components";
import { PropProfil } from "@/app/dashboard/house/in-progress/profil/[id]/layout";
import { PersonLargeIcon } from "@/utils/icon";

export default function DashboardProfilHeader({ profilData }: PropProfil) {
  return (
    <StyledDashboardProfilHeader>
      <DashboardTitle icon={PersonLargeIcon}>
        {`${profilData?.first_name} ${profilData?.last_name}`}
      </DashboardTitle>
    </StyledDashboardProfilHeader>
  );
}

const StyledDashboardProfilHeader = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
