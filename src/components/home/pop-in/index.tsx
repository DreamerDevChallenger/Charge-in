import Picture from "@/components/materials/icon";
import { LoginIcon } from "@/utils/icon";
import Link from "next/link";
import styled from "styled-components";

export default function HomePopIn() {
  return (
    <StyledHomePopIn href={"/login"}>
      <span>Connecter vous ? </span>
      <LoginIcon src={LoginIcon} width={32} height={32} />
    </StyledHomePopIn>
  );
}

const StyledHomePopIn = styled(Link)`
  background-color: ${({ theme }) => theme.white};
  font-weight: bold;
  font-size: 16px;
  border-radius: 6px;
  padding: 20px 32px;
  width: 100%;
  max-width: 300px;
  align-self: center;
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
