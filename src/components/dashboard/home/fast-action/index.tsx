"use client";

import SectionTitle from "@/components/materials/section-title";
import styled from "styled-components";
import { dataFastAction } from "./data";
import Icon from "@/components/materials/icon";

export default function FastAction() {
  return (
    <StyledFastAction>
      <SectionTitle important="Rapides">Actions</SectionTitle>
      <div className="action-container">
        {dataFastAction.map((item, index) => (
          <div key={index} className="action-item">
            <Icon width={24} Icon={item.icon} height={24} />

            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </StyledFastAction>
  );
}

const StyledFastAction = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;

  .action-container {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    width: 100%;
    align-items: center;
    .action-item {
      padding: 10px 16px;
      border-radius: 8px;
      max-width: 350px;
      margin: auto;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      text-align: center;

      gap: 10px;
      color: ${({ theme }) => theme.white};
      &:nth-child(odd) {
        background: ${({ theme }) => theme.secondary};
      }
      &:nth-child(even) {
        background: ${({ theme }) => theme.primary};
      }
    }
  }
`;
