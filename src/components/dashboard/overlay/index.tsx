"use client";

import { useAppSelector } from "@/redux/hooks";
import { selectOverlay } from "@/redux/selectors";
import styled from "styled-components";

export default function Overlay() {
  const { isOpen } = useAppSelector(selectOverlay);

  return (
    <StyledOverlay
      id="overlay"
      className={isOpen ? "open" : "close"}
    ></StyledOverlay>
  );
}

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  z-index: 10;
  transition: 0.5s;

  &.close {
    visibility: hidden;
    opacity: 0;
  }

  &.open {
    opacity: 1;
    visibility: visible;
  }
`;
