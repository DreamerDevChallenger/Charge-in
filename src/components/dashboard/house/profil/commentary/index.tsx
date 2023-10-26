import ButtonProfil from "@/components/materials/button-profil";
import Text from "@/components/materials/text";
import { chivo } from "@/utils/font";
import styled from "styled-components";

export default function DashboardProfilCommentary() {
  return (
    <StyledCommentary>
      <div className="card">
        <h2>Commentaires</h2>
        <div className="card-container">
          <textarea
            id="text-area"
            className={chivo.className}
            placeholder="Ajouter un commentaire..."
          ></textarea>
        </div>
        <div className="card-container">
          <ButtonProfil onClick={() => {}}>
            Historique des commentaires
          </ButtonProfil>
        </div>
      </div>
    </StyledCommentary>
  );
}

const StyledCommentary = styled.section`
  textarea {
    width: 100%;
    height: 102px;
    padding: 12px 20px;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: #f4f8f6;
    border: 0;
    font-size: 16px;
    resize: none;
    outline: none;
    &::placeholder {
      color: ${({ theme }) => theme.black};
      font-size: 18px;
      font-weight: 400;
    }
  }
`;
