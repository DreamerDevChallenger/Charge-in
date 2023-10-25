"use client";

import HeaderDashboard from "@/components/dashboard/header";
import Overlay from "@/components/dashboard/overlay";
import styled from "styled-components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Overlay />
      <StyledDahboard className="main-dashboard">
        <HeaderDashboard />
        {children}
      </StyledDahboard>
    </>
  );
}

const StyledDahboard = styled.main`
  .card {
    background: ${({ theme }) => theme.white};
    padding: 40px 30px;
    border-radius: 16px;
    box-shadow: 0px 4px 16px 0px rgba(176, 189, 189, 0.16);
    display: flex;
    flex-direction: column;
    gap: 24px;

    h2 {
      text-align: left;
      font-size: 25px;
    }

    font-size: 16px;
    .value {
      opacity: 0.5;
    }

    .card-item {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .card-wrapper {
      display: flex;
      flex-direction: column;
      .card-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px 0;
        border-bottom: 1px solid #e5e5e5;

        &:nth-last-child(-n + 1) {
          border-bottom: 1px solid transparent;
        }

        .card-row {
          &.card-space-between {
            justify-content: space-between;
          }
          display: flex;
          flex-direction: row;
          gap: 16px;
          flex-wrap: wrap;
        }
      }
    }
  }
`;
