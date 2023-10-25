"use client";

import SectionTitle from "@/components/materials/section-title";
import styled from "styled-components";
import { dataStatistic } from "./data";
import Icon from "@/components/materials/icon";
import Text from "@/components/materials/text";

export default function DashboardStatistic() {
  return (
    <StyledDashboardStatistic>
      <SectionTitle important="Charge-in">Statistiques de</SectionTitle>
      <div className="card-container">
        {dataStatistic.map((item, index) => (
          <div key={index} className="card">
            <Icon Icon={item.icon} width={41} height={36} />
            <Text>{item.text}</Text>
          </div>
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
    justify-content: space-between;
    grid-template-columns: repeat(auto-fit, 260px);
    gap: 24px;
    .card {
      background: white;
      padding: 26px 30px;
      width: 100%;
      height: 100%;
      margin: auto;
      border-radius: 16px;
      box-shadow: 0px 4px 16px 0px rgba(176, 189, 189, 0.16);

      .text {
        color: #8fa2a2;
        font-size: 18px;
      }
    }
  }
  @media (min-width: 768px) {
    justify-content: center;
  }

  svg {
    color: ${({ theme }) => theme.primary};
  }
`;
