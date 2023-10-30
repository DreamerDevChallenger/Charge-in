"use client";

import HeaderDashboard from "@/components/dashboard/header";
import Overlay from "@/components/dashboard/overlay";
import SvgGradient from "@/components/materials/svg-gradient";
import styled from "styled-components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StyledDahboard className="main-dashboard">
        <HeaderDashboard />
        {children}
        <SvgGradient />
      </StyledDahboard>
      <Overlay />
    </>
  );
}

const StyledDahboard = styled.main`
  .card {
    background: ${({ theme }) => theme.white};
    padding: 40px 20px;
    border-radius: 16px;
    box-shadow: 0px 4px 16px 0px rgba(176, 189, 189, 0.16);
    display: flex;
    flex-direction: column;
    gap: 24px;

    h2 {
      justify-content: center;
      text-align: center;
      font-size: 25px;
    }

    .value {
      opacity: 0.5;
    }

    .card-item {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .card-grid {
      display: grid;
      grid-auto-rows: 1fr;
    }

    .card-list-item {
      display: flex;
      align-items: center;

      &:before {
        display: inline-block;
        content: "";
        background: ${({ theme }) => theme.primary};
        min-width: 5px;
        min-height: 5px;
        margin-right: 10px;
        border-radius: 100%;
      }
    }

    .card-wrapper {
      display: flex;
      flex-direction: column;

      .card-row {
        &.card-space-between {
          justify-content: space-between;
        }
        display: flex;
        flex-direction: row;
        gap: 16px;
        flex-wrap: wrap;
      }

      .card-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px 0;
        border-bottom: 1px solid #e5e5e5;

        &:nth-last-child(-n + 1) {
          border-bottom: 1px solid transparent;
        }
      }
    }
  }

  @media (min-width: 425px) {
    .card {
      padding: 40px 30px;
    }
  }

  @media (min-width: 768px) {
    .card {
      h2 {
        text-align: start;
        justify-content: start;
      }
    }
  }
`;
