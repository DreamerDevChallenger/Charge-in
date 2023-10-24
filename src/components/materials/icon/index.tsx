"use client";

import styled from "styled-components";

interface PictureProp {
  Icon: any;
  width: number;
  height: number;
  stroke?: "primary" | string;
}

export default function Icon({ Icon, width, height, stroke }: PictureProp) {
  return (
    <StyledIcon stroke={stroke} width={width} height={height} className="icon">
      <Icon />
    </StyledIcon>
  );
}

const StyledIcon = styled.div<{
  width: number;
  height: number;
  stroke?: string;
}>`
  display: flex;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  svg {
    width: 100%;
    height: auto;
  }

  path {
    width: 100%;
    height: 100%;

    ${({ stroke, theme }) =>
      stroke &&
      `stroke:${
        stroke === "primary"
          ? theme.primary
          : stroke === "white"
          ? theme.white
          : stroke === "black" && theme.black
      }`}
  }
`;
