import ButtonProfil from "@/components/materials/button-profil";
import Text from "@/components/materials/text";
import styled from "styled-components";
import { dataDocument } from "./data";

export default function DashboardProfilDocument() {
  return (
    <StyledDocument>
      <div className="card">
        <h2>Documents ajoutés</h2>
        <div className="card-grid title-container">
          {dataDocument.map((_, index) => (
            <div key={index} className="card-item">
              <Text className="label">Titre du document</Text>
              <Text className="document">nomdufichier.png</Text>
            </div>
          ))}
        </div>
        <div className="other-document">
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

  .other-document {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  .title-container {
    grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
    gap: 10px;
    align-items: center;
    gap: 18px 48px;
    border-bottom: 1px solid ${({ theme }) => theme.background_primary};
    padding-bottom: 24px;

    .card-item {
      align-items: center;
    }

    span {
      width: fit-content;
    }

    .label {
      margin-right: 8px;
    }
  }

  @media (min-width: 455px) {
    .title-container {
      .card-item {
        align-items: start;
      }
    }
  }
`;
