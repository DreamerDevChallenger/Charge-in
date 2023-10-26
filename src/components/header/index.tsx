import styled from "styled-components";

import { usePathname } from "next/navigation";
import Link from "next/link";

import Logo from "../materials/logo";
import { ArrowBackIos } from "@mui/icons-material";
import Text from "../materials/text";

export default function Header() {
  const pathname = usePathname();

  return (
    <StyledHeader>
      {pathname !== "/" && (
        <Link href={"/"} className={`link-to-home`}>
          <ArrowBackIos />
          <Text>Retour vers la page d&rsquo;accueil</Text>
        </Link>
      )}

      <Logo width={161} height={35} />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  padding: 42px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  gap: 12px;

  .link-to-home {
    color: ${({ theme }) => theme.primary};
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  @media (min-width: 768px) {
    padding: 42px 56px;
    flex-direction: row;
    justify-content: space-between;
  }
`;
