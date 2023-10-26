import Text from "@/components/materials/text";
import styled from "styled-components";

export default function ButtonContainer() {
  return (
    <StyledButtonContainer>
      <div className="left">
        <button className="step">
          <Text>Étape</Text>
        </button>
      </div>
      <div className="right">
        <button className="statut">
          <Text>Statut</Text>
        </button>
        <button className="mail">
          <Text>Envoyer un mail</Text>
        </button>
      </div>
    </StyledButtonContainer>
  );
}

const StyledButtonContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;

  .right {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  button {
    height: 45px;
    padding: 10px 22px;
    font-size: 18px;
    border-radius: 8px;

    &.statut {
      color: ${({ theme }) => theme.primary};
      border: 1px solid ${({ theme }) => theme.primary};
    }

    &.mail {
      background: ${({ theme }) => theme.primary};
    }

    &.step {
      background: ${({ theme }) => theme.secondary};
    }

    &.step,
    &.mail {
      color: ${({ theme }) => theme.white};
    }
  }
`;
