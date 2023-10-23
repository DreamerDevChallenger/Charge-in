import logo from "@/assets/logo.png";

import Image from "next/image";
import styled from "styled-components";

interface PropLogo {
  width: number;
  height: number;
}

export default function Logo({ width, height }: PropLogo) {
  return (
    <StyledLogo
      src={logo}
      alt="Charge-in Logo"
      width={width}
      height={height}
      priority
    />
  );
}

const StyledLogo = styled(Image)``;
