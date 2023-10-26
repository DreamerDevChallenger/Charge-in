"use client";

import styled, { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "../lib/registry";
import { usePathname } from "next/navigation";
import Header from "@/components/header";
import DashboardHeaderNav from "@/components/dashboard/header-nav";

export const appTheme = {
  error: "#A94442",
  success: "#27AE60",
  text: "#6A6A6A",
  text_secondary: "#6A93AC",
  border: "#DCE6E5",
  background_primary: "#F4F8F6",
  background_secondary: "#0C354F",
  background_tertiary: "#326B8F",
  primary: "#369C96",
  secondary: "#304399",
  tertiary: "#4BD2CA",
  quaternary: "#8BDFDA ",
  black: "#000",
  white: "#FFF",
  gray: "#AFB2B6",
  gray_second: "#8FA2A2",
};

const combineTheme = {
  ...appTheme,
  primary_gradient: {
    first: appTheme.background_secondary,
    second: appTheme.background_tertiary,
  },
  secondary_gradient: { first: appTheme.quaternary, second: appTheme.primary },
};

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
  height: 100vh;
  display: flex;
  position: relative;

  &.app {
    flex-direction: column;
    gap: 0px;
    min-height: 100vh;
    height: auto;
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
    .main-dashboard {
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
