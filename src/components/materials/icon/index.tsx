"use client";

import styled from "styled-components";

interface PictureProp {
  Icon: any;
  width: number;
  height: number;

  gradient?: boolean;
}

export default function Icon({ Icon, width, height, gradient }: PictureProp) {
  return (
    <StyledIcon
      width={width}
      height={height}
      className={`${gradient ? "gradient " : ""} icon`}
    >
      <Icon />
    </StyledIcon>
  );
}

const StyledIcon = styled.div<{
  width: number;
  height: number;
}>`
  display: flex;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  min-width: ${({ width }) => width}px;
  min-height: ${({ width }) => width}px;

  svg {
    width: 100%;
    height: auto;
  }

  &.gradient {
    svg {
      fill: url(#linearColors);
    }
  }
`;
