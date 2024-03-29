"use client";

import styled from "styled-components";
import Icon from "../icon";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

export default function PageTitle({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}) {
  return (
    <StyledPageTitle>
      <Icon Icon={icon} width={36} height={36} />
      {children}
    </StyledPageTitle>
  );
}

const StyledPageTitle = styled.h1`
  color: ${({ theme }) => theme.black};
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap-reverse;
  text-align: center;
  gap: 10px;

  svg {
    color: ${({ theme }) => theme.primary};
  }
`;
