"use client";

import SectionTitle from "@/components/materials/section-title";
import styled from "styled-components";
import { dataStatistic } from "./data";

export default function DashboardStatistic() {
  return (
    <StyledDashboardStatistic>
      <SectionTitle important="Charge-in">Statistiques de</SectionTitle>
      <div className="card-container">
        {dataStatistic.map((item, index) => (
          <div key={index} className="card"></div>
        ))}
      </div>
    </StyledDashboardStatistic>
  );
}

const StyledDashboardStatistic = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, 260px);
    justify-content: space-around;
    gap: 24px;
    .card {
      background: white;
      padding: 26px 30px;
      width: 100%;
      margin: auto;
      height: 220px;
      border-radius: 16px;
      box-shadow: 0px 4px 16px 0px rgba(176, 189, 189, 0.16);
    }
  }
  @media (min-width: 768px) {
    justify-content: center;
  }
`;
