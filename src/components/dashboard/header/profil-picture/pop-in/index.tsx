import styled from "styled-components";
import { dataProfil } from "./data";
import {
  ProfilAvatar,
  ProfilUserName,
  ProfilMail,
} from "@/components/materials/profil";
import Text from "@/components/materials/text";
import Link from "next/link";
import Button from "@/components/materials/button";
import { useRouter } from "next/navigation";
import { Login } from "@mui/icons-material";

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
            {<item.icon />}
            <Text>{item.text}</Text>
          </Link>
        ))}
      </div>
      <div className="pop-in-footer">
        <Button onClick={() => router.push("/login")}>
          <Login />
          <Text>Déconnexion</Text>
        </Button>
      </div>
    </StyledProfilPopIn>
  );
}

const StyledProfilPopIn = styled.div`
  max-width: 350px;

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
`;
