"use client";

import styled, { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "../lib/registry";
import { usePathname } from "next/navigation";
import Header from "@/components/header";
import DashboardNav from "@/components/dashboard/header-nav";
import Overlay from "@/components/dashboard/overlay";

const appTheme = {
  text: "#6A6A6A",
  border: "#DCE6E5",
  background_primary: "#F4F8F6",
  background_secondary: "#0C354F",
  primary: "#369C96",
  secondary: "#304399",
  tertiary: "#4BD2CA",
  black: "#000",
  white: "#FFF",
  gray: "#AFB2B6",
};

const combineTheme = {
  ...appTheme,
  primary_gradient: { first: appTheme.primary, second: appTheme.secondary },
  secondary_gradient: {},
};

export default function App({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const conditionalPath = pathname === "/login" || pathname === "/";
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={combineTheme}>
        <StyledApp id="app" className={conditionalPath ? "app" : "dashboard"}>
          {conditionalPath ? <Header /> : <DashboardNav />}
          {children}
        </StyledApp>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}

const StyledApp = styled.div`
  background-color: ${({ theme }) => theme.background_primary};
  min-height: 100vh;
  display: flex;
  position: relative;

  &.app {
    flex-direction: column;
    gap: 0px;
    main {
      padding: 20px;
      section {
        display: flex;
        justify-content: center;
      }
    }
  }

  &.dashboard {
    position: relative;
    flex-direction: row;
    .main-dashboard {
      padding: 30px 40px 30px;
    }
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
