import ButtonProfil from "@/components/materials/button-profil";
import Text from "@/components/materials/text";
import styled from "styled-components";
import { dataDocument } from "./data";

export default function DashboardProfilDocument() {
  return (
    <StyledDocument>
      <div className="card">
        <h2>Documents ajoutés</h2>
        <div className="card-row title">
          {dataDocument.map((_, index) => (
            <div key={index} className="card-item">
              <Text className="label">Titre du document</Text>
              <Text className="document">nomdufichier.png</Text>
            </div>
          ))}
        </div>
        <div className="card-row">
          <Text className="label">Autre documents</Text>
          <Text className="document">nomdufichier.png</Text>
          <Text className="document">nomdufichier.png</Text>
          <Text className="document">nomdufichier.png</Text>
        </div>
        <div className="card-container">
          <ButtonProfil onClick={() => {}}>Modifier les documents</ButtonProfil>
        </div>
      </div>
    </StyledDocument>
  );
}

const StyledDocument = styled.section`
  .document {
    padding: 2px 8px;
    background: #f4f8f6;
    color: ${({ theme }) => theme.primary};
  }

  .card-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    &.title {
      gap: 18px 64px;
      border-bottom: 1px solid ${({ theme }) => theme.background_primary};
      padding-bottom: 24px;
    }
    gap: 16px;
    .label {
      margin-right: 8px;
    }
  }
`;
