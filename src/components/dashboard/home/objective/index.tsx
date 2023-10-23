"use client";

import styled from "styled-components";
import Trimester from "./trimester";
import PieChart from "./pie-chart";
import SectionTitle from "@/components/materials/section-title";

export default function DashboardObjectives() {
  return (
    <StyledDashboardObjectives>
      <header>
        <SectionTitle important="Charge-in">Objectifs de</SectionTitle>
        <Trimester />
      </header>
      <PieChart />
    </StyledDashboardObjectives>
  );
}

const StyledDashboardObjectives = styled.section`
  color: ${({ theme }) => theme.white};
  padding: 30px 38px;
  width: 100%;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  gap: 36px;

  header {
    display: flex;
    gap: 24px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  background: linear-gradient(
    158deg,
    ${({ theme }) =>
      `${theme.primary_gradient.first} 0%, ${theme.primary_gradient.second} 98.23%`}
  );
  box-shadow: 0px 4px 16px 0px rgba(164, 188, 211, 0.6);
`;
