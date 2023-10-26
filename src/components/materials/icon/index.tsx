"use client";

import styled from "styled-components";

interface PictureProp {
  Icon: any;
  width: number;
  height: number;
  stroke?: "primary" | string;
  fill?: "primary";
}

export default function Icon({
  Icon,
  width,
  height,
  stroke,
  fill,
}: PictureProp) {
  return (
    <StyledIcon
      fill={fill}
      stroke={stroke}
      width={width}
      height={height}
      className="icon"
    >
      <Icon />
    </StyledIcon>
  );
}

const StyledIcon = styled.div<{
  width: number;
  height: number;
  stroke?: "primary" | string;
  fill?: "primary";
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

  path {
    ${({ stroke, theme }) =>
      stroke &&
      `stroke:${
        stroke === "primary"
          ? theme.primary
          : stroke === "white"
          ? theme.white
          : stroke === "black" && theme.black
      }`};

    ${({ fill, theme }) =>
      fill &&
      `fill:${
        fill === "primary"
          ? theme.primary
          : fill === "white"
          ? theme.white
          : fill === "black" && theme.black
      }`};
  }
`;
