"use client";

import styled from "styled-components";
import { dataStatistic } from "./data";

import SectionTitle from "@/components/materials/section-title";
import Icon from "@/components/materials/icon";
import Text from "@/components/materials/text";

import ButtonDropdown from "./button-dropdown";
import DashboardStatisticB2BB2C from "./b2b-b2c";
import DashboardStatisticDigit from "./digit";

export default function DashboardStatistic() {
  return (
    <StyledDashboardStatistic>
      <header>
        <SectionTitle important="Charge-in">Statistiques de</SectionTitle>
        <ButtonDropdown />
      </header>
      <div className="card-container">
        {dataStatistic.map((item, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <Icon Icon={item.icon} width={41} height={36} gradient />
              <Text className="description">{item.text}</Text>
            </div>
            {item.subscription && (
              <div className="card-subscription">
                <Text>Nombre d’abonnements</Text>
                <Text className="number">{item.subscription}</Text>
              </div>
            )}
            <DashboardStatisticDigit
              number={item.number}
              income={item.income}
              value={item.value}
              price={item.price}
            />
            {item.B2B && item.B2C && (
              <DashboardStatisticB2BB2C B2B={item.B2B} B2C={item.B2C} />
            )}
          </div>
        ))}
      </div>
    </StyledDashboardStatistic>
  );
}

const StyledDashboardStatistic = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  header {
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 1fr;
    gap: 12px;
    max-width: 1500px;
    width: 100%;

    .card {
      padding: 26px 30px;

      .card-header {
        display: flex;
        flex-direction: column;
        gap: 12px;

        .description {
          color: ${({ theme }) => theme.gray_second};
          font-size: 18px;
        }
      }

      .card-subscription {
        display: flex;
        flex-direction: column;
        color: ${({ theme }) => theme.gray_second};

        .number {
          font-weight: bold;
          color: ${({ theme }) => theme.black};
        }
      }
    }
  }
`;
