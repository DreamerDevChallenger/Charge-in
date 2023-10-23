import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleNavbar } from "@/redux/reducers/toggle-navbar";
import { selectToggleNavbar } from "@/redux/selectors";
import styled from "styled-components";

export default function HamburgerMenu() {
  const { isOpen } = useAppSelector(selectToggleNavbar);
  const dispatch = useAppDispatch();

  return (
    <StyledHamburgerMenu
      aria-label="toggle navbar"
      className={`hamburger-menu ${isOpen ? "open" : "close"}`}
      onClick={() => dispatch(toggleNavbar())}
    >
      <div className="lign"></div>
      <div className="lign"></div>
      <div className="lign"></div>
    </StyledHamburgerMenu>
  );
}

const StyledHamburgerMenu = styled.button`
  position: absolute;
  cursor: pointer;
  right: -15px;
  top: 30px;
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
    background-color: ${({ theme }) => theme.primary};
    border-radius: 10px;
    position: relative;
    top: 0;
    transition: 0.3s ease-in-out;
  }
`;
