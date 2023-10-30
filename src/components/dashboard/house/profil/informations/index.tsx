"use client";

import Text from "@/components/materials/text";
import styled from "styled-components";
import InformationAnswer from "./answer";
import PersonalInformation from "./personal";

export default function DashboardProfilcard() {
  return (
    <StyledDashboardProfilInformation>
      <PersonalInformation />
      <InformationAnswer />
    </StyledDashboardProfilInformation>
  );
}

const StyledDashboardProfilInformation = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;

  @media (min-width: 1340px) {
    justify-content: space-between;
  }
`;
