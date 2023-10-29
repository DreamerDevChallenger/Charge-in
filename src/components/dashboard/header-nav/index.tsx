import styled from "styled-components";
import DashboardNav from "./nav";
import Logo from "@/components/materials/logo";
import HamburgerMenu from "./hamburger-menu";
import { useAppSelector } from "@/redux/hooks";
import { selectToggleNavbar } from "@/redux/selectors";

export default function DashboardHeaderNav() {
  const { isOpen } = useAppSelector(selectToggleNavbar);

  return (
    <StyledDashboardHeaderNav className={`${isOpen ? "open" : "close"}`}>
      <HamburgerMenu />

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
  height: 100%;
  transition: transform 0.3s ease-out;
  z-index: 6;
  min-width: 240px;

  .nav-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    overflow: auto;
    height: 100%;
    padding: 36px 24px;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &.open {
    transform: translateX(0%);
  }

  &.close {
    transform: translateX(-101%);
  }

  @media (min-width: 1024px) {
    position: sticky;
    margin-right: 0px;
    height: 100vh;

    &.close {
      transform: translateX(0%);
    }
  }
`;
