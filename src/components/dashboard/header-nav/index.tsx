import { useState } from "react";
import styled from "styled-components";
import DashboardNav from "./nav";
import Logo from "@/components/materials/logo";

export default function DashboardHeaderNav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <StyledDashboardHeaderNav className={`${isOpen ? "open" : "close"}`}>
      <button
        aria-label="toggle navbar"
        className={`hamburger-menu ${isOpen ? "open" : "close"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="lign"></div>
        <div className="lign"></div>
        <div className="lign"></div>
      </button>

      <div className="nav-container">
        <div className="img-container">
          <Logo width={172} height={36} />
        </div>
        <DashboardNav />
      </div>
    </StyledDashboardHeaderNav>
  );
}

const StyledDashboardHeaderNav = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.background_secondary};
  max-width: 270px;
  width: 80%;
  height: 100%;
  margin-right: 45px;
  transition: transform 0.3s ease-out;
  z-index: 5;

  .nav-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    overflow: auto;
    height: 100%;
    padding: 36px 24px;
  }

  &.open {
    transform: translateX(0%);
  }

  &.close {
    transform: translateX(-101%);
  }

  .hamburger-menu {
    position: absolute;
    right: -15px;
    top: 15px;
    height: 21px;
    width: 28px;
    transform: translateX(100%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &.open {
      .lign {
        &:nth-child(1) {
          top: 10px;
          transform: rotateZ(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          top: -8px;
          transform: rotateZ(-45deg);
        }
      }
    }

    .lign {
      height: 3px;
      width: 100%;
      background-color: ${({ theme }) => theme.background_secondary};
      border-radius: 10px;
      position: relative;
      top: 0;
      transition: 0.3s ease-in-out;
    }
  }
`;
