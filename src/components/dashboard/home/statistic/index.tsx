"use client";

import SectionTitle from "@/components/materials/section-title";
import styled from "styled-components";
import { dataStatistic } from "./data";
import Icon from "@/components/materials/icon";
import Text from "@/components/materials/text";
import ButtonDropdown from "./button-dropdown";
import {
  DragHandle,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";

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
              <Icon Icon={item.icon} width={41} height={36} />
              <Text className="description">{item.text}</Text>
            </div>
            {item.subscription && (
              <div className="card-subscription">
                <Text>Nombre d’abonnements</Text>
                <Text className="number">{item.subscription}</Text>
              </div>
            )}
            <div className="card-digit">
              <div className="number">
                <Text>{item.number ? item.number : `${item.price}€`}</Text>

                {item.price && <Text className="ht">HT</Text>}
              </div>
              <div
                className={`${
                  item.income === "same"
                    ? "same"
                    : item.income
                    ? "positive"
                    : !item.income && "negative"
                } income`}
              >
                {item.income === "same" ? (
                  <Icon Icon={DragHandle} width={24} height={24} />
                ) : item.income ? (
                  <Icon Icon={KeyboardArrowUp} width={24} height={24} />
                ) : (
                  !item.income && (
                    <Icon Icon={KeyboardArrowDown} width={24} height={24} />
                  )
                )}
                <Text>{item.value}%</Text>
              </div>
            </div>

            {item.B2B && item.B2C && (
              <div className="card-b2c-b2b">
                <div className="b2c card-item">
                  <Text>B2C</Text>
                  <Text className="price">
                    {item.B2C} {item.B2C !== "##" && "€ HT"}
                  </Text>
                </div>
                <div className="b2b card-item">
                  <Text>B2B</Text>
                  <Text className="price">
                    {item.B2B} {item.B2B !== "##" && "€ HT"}
                  </Text>
                </div>
              </div>
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
    gap: 12px;
    max-width: 1500px;
    width: 100%;

    .card {
      padding: 26px 30px;
      height: 100%;

      .card-header {
        display: flex;
        flex-direction: column;
        gap: 12px;

        .icon {
          color: ${({ theme }) => theme.primary};
        }
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

      .card-digit {
        display: flex;
        justify-content: space-between;
        margin-top: auto;

        .number {
          font-size: 28px;
          font-weight: 600;
          display: flex;
          gap: 10px;
          align-items: center;

          .ht {
            color: ${({ theme }) => theme.gray_second};
            font-size: 16px;
            font-weight: 400;
          }
        }

        .income {
          display: flex;
          align-items: center;
          font-size: 18px;

          &.positive {
            color: ${({ theme }) => theme.success};
          }
          &.same {
            color: ${({ theme }) => theme.gray_second};
          }

          &.negative {
            color: ${({ theme }) => theme.error};
          }
        }
      }

      .card-b2c-b2b {
        display: flex;
        justify-content: space-between;
        padding-right: 24px;
        gap: 8px;
        .card-item {
          gap: 2px 12px;
          .price {
            color: ${({ theme }) => theme.background_secondary};
          }
        }
      }
    }
  }
  @media (min-width: 768px) {
    justify-content: center;
  }
`;
