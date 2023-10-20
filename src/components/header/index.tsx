import styled from "styled-components";

import Image from "next/legacy/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { chivo } from "@/utils/font";
import { ArrowLeft } from "@/utils/icon";
import logo from "@/assets/logo.svg";

export default function Header() {
  const pathname = usePathname();

  return (
    <StyledHeader>
      {pathname !== "/" && (
        <Link href={"/"} className={`${chivo.className} link-to-home`}>
          <ArrowLeft />
          Retour vers la page d&rsquo;accueil
        </Link>
      )}

      <div className="logo-container">
        <Image
          src={logo}
          alt={`Charge-in logo`}
          objectFit="cover"
          objectPosition={"center"}
          layout="fill"
          priority
        />
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  padding: 42px;
  display: flex;
  flex-direction: column-reverse;
  gap: 12px;
  align-items: center;

  .link-to-home {
    color: ${({ theme }) => theme.primary};
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .logo-container {
    width: 100%;
    max-width: 400px;
    position: relative;
    width: 161px;
    height: 35px;
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
