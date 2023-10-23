import React from "react";
import styled from "styled-components";

export default function SectionTitle({
  children,
  important,
}: {
  children: React.ReactNode;
  important: string;
}) {
  return (
    <StyledSectionTitle>
      {children} <span>{important}</span>
    </StyledSectionTitle>
  );
}

const StyledSectionTitle = styled.h2`
  font-weight: 600;
  text-align: center;
  font-size: 27px;

  span {
    color: ${({ theme }) => theme.tertiary};
    white-space: nowrap;
  }
`;
