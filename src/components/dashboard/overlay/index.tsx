"use client";

import styled from "styled-components";

export default function Overlay() {
  return <StyledOverlay id="overlay"></StyledOverlay>;
}

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  visibility: hidden;
  z-index: 10;
`;
