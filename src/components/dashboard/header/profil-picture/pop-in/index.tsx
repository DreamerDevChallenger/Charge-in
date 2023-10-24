import styled from "styled-components";
import { dataProfil } from "./data";
import {
  ProfilAvatar,
  ProfilUserName,
  ProfilMail,
} from "@/components/materials/profil";
import Text from "@/components/materials/text";
import Icon from "@/components/materials/icon";
import Link from "next/link";
import Button from "@/components/materials/button";
import { LogoOutIocn } from "@/utils/icon";
import { useRouter } from "next/navigation";

export default function ProfilPopIn() {
  const router = useRouter();

  return (
    <StyledProfilPopIn className="pop-in">
      <h3 className="title">Profil</h3>
      <div className="profil-container pop-in-item">
        <div className="profil-avatar">
          <ProfilAvatar width={36} height={36} />
        </div>
        <div className="profil-information">
          <ProfilUserName />
          <ProfilMail />
        </div>
      </div>
      <div className="profil-link-container pop-in-item">
        {dataProfil.map((item, index) => (
          <Link href={"#"} key={index} className="profil-link-item">
            <Icon Icon={item.icon} width={20} height={20} stroke="black" />
            <Text>{item.text}</Text>
          </Link>
        ))}
      </div>
      <Button onClick={() => router.push("/login")}>
        <Icon Icon={LogoOutIocn} width={20} height={20} stroke="white" />
        <Text>Déconnexion</Text>
      </Button>
    </StyledProfilPopIn>
  );
}

const StyledProfilPopIn = styled.div`
  z-index: 5;
  position: absolute;
  top: 50px;
  right: 0px;
  padding: 18px 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0px 4px 16px 0px rgba(180, 189, 189, 0.25);
  opacity: 0;
  visibility: hidden;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  width: 100%;
  max-width: 350px;

  .title {
    font-weight: 600;
    font-size: 18px;
    padding: 0 24px;
  }

  .profil-container {
    padding: 0 24px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    gap: 16px;

    .profil-information {
      display: flex;
      flex-direction: column;

      .username {
        color: ${({ theme }) => theme.black};
        font-weight: 600;
      }

      .mail {
        color: #8fa2a2;
        font-size: 12px;
      }
    }
  }

  .profil-link-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 24px;

    .profil-link-item {
      display: flex;
      gap: 10px;
      align-items: center;
    }
  }

  .pop-in-item {
    border-bottom: 1px solid #e5e5e5;
    padding: 20px 24px;
  }

  button {
    align-self: flex-end;
    margin: 20px 24px 0;
    padding: 6px 20px;
    border-radius: 8px;

    color: ${({ theme }) => theme.white};
    background: linear-gradient(
      123deg,
      ${({ theme }) =>
        `${theme.secondary_gradient.first}, ${theme.secondary_gradient.second}`}
    );

    .text {
      line-height: 24.6px;
    }
  }
`;
