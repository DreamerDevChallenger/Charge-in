import { Login } from "@mui/icons-material";
import Link from "next/link";
import styled from "styled-components";

export default function HomePopIn() {
  return (
    <StyledHomePopIn href={"/login"}>
      <span>Connecter vous ? </span>
      <Login />
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

  svg {
    color: ${({ theme }) => theme.primary};
  }
`;
