"use client";

import styled from "styled-components";

interface PictureProp {
  Icon: any;
  width: number;
  height: number;
  stroke?: "primary" | string;
  fill?: "primary";
  gradient?: boolean;
}

export default function Icon({
  Icon,
  width,
  height,
  stroke,
  gradient,
  fill,
}: PictureProp) {
  return (
    <StyledIcon
      fill={fill}
      stroke={stroke}
      width={width}
      height={height}
      className="icon"
      gradient={gradient}
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
  gradient?: boolean;
}>`
  display: flex;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  min-width: ${({ width }) => width}px;
  min-height: ${({ width }) => width}px;

  svg {
    width: 100%;
    height: auto;
    ${({ gradient }) => gradient && "fill: url(#linearColors)"}
  }
`;
