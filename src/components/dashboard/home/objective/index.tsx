"use client";

import styled from "styled-components";
import Trimester from "./trimester";
import PieChart from "./pie-chart";

export default function DashboardObjectives() {
  return (
    <StyledDashboardObjectives>
      <header>
        <h2 className="objective-title">
          Objectifs de <span>Charge-in</span>
        </h2>
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
  gap: 24px;

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

  .objective-title {
    font-weight: 600;
    text-align: center;
    flex: 1;

    span {
      color: ${({ theme }) => theme.tertiary};
      white-space: nowrap;
    }
  }
`;
