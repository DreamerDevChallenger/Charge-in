import ButtonProfil from "@/components/materials/button-profil";
import styled from "styled-components";

export default function DashboardProfilDocument() {
  return (
    <StyledDocument>
      <div className="card">
        <h2>Documents ajoutés</h2>
        <div className="card-container">
          <ButtonProfil onClick={() => {}}>Modifier les documents</ButtonProfil>
        </div>
      </div>
    </StyledDocument>
  );
}

const StyledDocument = styled.section``;
