"use client";

import Text from "@/components/materials/text";
import Link from "next/link";
import styled from "styled-components";

export default function NotFound() {
  return (
    <StyledNotFound>
      <h2>
        <strong>404</strong> Page Not Found
      </h2>
      <Text>Could not find requested resource</Text>
      <Link href={"/dashboard"}>Return to dashboard</Link>
    </StyledNotFound>
  );
}

const StyledNotFound = styled.main`
  height: 100vh;
  text-align: center;
  justify-content: center;

  strong {
    color: ${({ theme }) => theme.primary};
  }

  a {
    color: ${({ theme }) => theme.primary};
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
