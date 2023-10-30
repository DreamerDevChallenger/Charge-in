import Icon from "@/components/materials/icon";
import Text from "@/components/materials/text";
import { KeyboardArrowDown } from "@mui/icons-material";
import styled from "styled-components";

export default function ButtonContainer() {
  return (
    <StyledButtonContainer>
      <div className="btn-container left">
        <button className="step">
          <Text>Étape</Text>
          <div className="icon-container">
            <Icon Icon={KeyboardArrowDown} width={24} height={24} />
          </div>
        </button>
      </div>
      <div className="btn-container right">
        <button className="statut">
          <Text>Statut</Text>
        </button>
        <button className="mail">
          <Text>Envoyer un mail</Text>
          <div className="icon-container">
            <Icon Icon={KeyboardArrowDown} width={24} height={24} />
          </div>
        </button>
      </div>
    </StyledButtonContainer>
  );
}

const StyledButtonContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;

  .btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .right {
    flex-direction: column;
    gap: 16px;
    flex-wrap: wrap;
  }

  button {
    font-size: 18px;
    border-radius: 8px;
    display: flex;
    width: fit-content;

    .text {
      padding: 10px 22px;
      line-height: 25px;
    }

    .icon-container {
      padding: 10px;
      height: 100%;
      border-left: 1px solid ${({ theme }) => theme.white};
    }

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

  @media (min-width: 768px) {
    flex-direction: row;
    .right {
      flex-direction: row;
    }
  }
`;
