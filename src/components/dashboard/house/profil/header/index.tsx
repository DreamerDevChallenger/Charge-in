"use client";

import styled from "styled-components";
import { PropProfil } from "@/app/dashboard/house/in-progress/profil/[id]/layout";
import PageTitle from "@/components/materials/page-title";
import { PersonOutlined } from "@mui/icons-material";

export default function DashboardProfilHeader({ profilData }: PropProfil) {
  return (
    <StyledDashboardProfilHeader>
      <PageTitle icon={PersonOutlined}>
        {/* Profil: */} {`${profilData?.first_name} ${profilData?.last_name}`}
      </PageTitle>
    </StyledDashboardProfilHeader>
  );
}

const StyledDashboardProfilHeader = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
