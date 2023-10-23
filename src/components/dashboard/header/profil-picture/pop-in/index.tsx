import styled from "styled-components";
import { dataProfil } from "./data";

export default function ProfilPopIn() {
  return (
    <StyledProfilPopIn>
      <h3 className="title">Profil</h3>
      <div className="profil-link-container">
        {dataProfil.map((item, index) => (
          <div key={index}>{item.text}</div>
        ))}
      </div>
    </StyledProfilPopIn>
  );
}

const StyledProfilPopIn = styled.div`
  display: none;
  padding: 18px 24px;
  background: white;
  right: 0;
  border-radius: 12px;
  box-shadow: 0px 4px 16px 0px rgba(180, 189, 189, 0.25);

  .title {
    font-weight: 600;
    font-size: 18px;
  }
`;
