"use client";

import styled, { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "../lib/registry";
import { usePathname } from "next/navigation";
import Header from "@/components/header";
import DashboardHeaderNav from "@/components/dashboard/header-nav";
import { combineTheme } from "@/utils/theme";

export default function App({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const conditionalPath = pathname === "/login" || pathname === "/";
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={combineTheme}>
        <StyledApp id="app" className={conditionalPath ? "app" : "dashboard"}>
          {conditionalPath ? <Header /> : <DashboardHeaderNav />}
          {children}
        </StyledApp>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}

const StyledApp = styled.div`
  background-color: ${({ theme }) => theme.background_primary};
  display: flex;
  position: relative;

  &.app {
    flex-direction: column;
    min-height: 100vh;

    main {
      padding: 20px;
      section {
        display: flex;
        justify-content: center;
      }
    }
  }

  &.dashboard {
    flex-direction: row;
    main {
      padding: 30px 20px 30px;
      gap: 30px;
      overflow: auto;
    }
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    &.dashboard {
      .main-dashboard {
        padding: 30px 40px 30px;
      }
    }
  }
`;
