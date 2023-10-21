"use client";

import styled, { keyframes } from "styled-components";

import FormHeader from "./form-header";
import FormContent from "./form-content";
import FormFooter from "./form-footer";
import FormRememberMe from "./form-remember-me";

export default function LoginForm() {
  return (
    <StyledLoginForm>
      <FormHeader />
      <FormContent />
      <FormRememberMe />
      <FormFooter />
    </StyledLoginForm>
  );
}

const animation = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }

  to {
    transform: scale(1);
  }
`;

const StyledLoginForm = styled.div`
  background-color: ${({ theme }) => theme.white};
  max-width: 507px;
  padding: 48px 28px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  animation: ${animation} 0.5s ease;
  box-shadow: 0px 0px 16px 0px rgba(167, 184, 186, 0.25);

  @media (min-width: 426px) {
    padding: 64px 58px;
  }
`;
