import styled from "styled-components";

import Image from "next/legacy/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { chivo } from "@/utils/font";
import { ArrowLeft } from "@/utils/icon";
import logo from "@/assets/logo.svg";
import Logo from "../materials/logo";

export default function Header() {
  const pathname = usePathname();

  return (
    <StyledHeader>
      {pathname !== "/" && (
        <Link href={"/"} className={`${chivo.className} link-to-home`}>
          <ArrowLeft />
          <span>Retour vers la page d&rsquo;accueil</span>
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
    .logo-container {
      float: right;
    }
  }
`;
