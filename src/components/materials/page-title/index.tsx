"use client";

import styled from "styled-components";
import Icon from "../icon";
import { FlashLargeIcon } from "@/utils/icon";

export default function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <StyledPageTitle>
      <Icon Icon={FlashLargeIcon} width={36} height={36} />
      <span>{children}</span>
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
`;
