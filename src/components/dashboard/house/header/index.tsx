"use client";

import styled from "styled-components";
import ButtonHouse from "./button";

export default function DashboardHouseHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledDashboardHouseHeader>
      {children}
      <div className="button-container">
        <ButtonHouse type="add">Ajouter un utilisateur</ButtonHouse>
        <ButtonHouse type="delete">Supprimer un utilisateur</ButtonHouse>
      </div>
    </StyledDashboardHouseHeader>
  );
}

const StyledDashboardHouseHeader = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;

  .button-container {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
