import Icon from "@/components/materials/icon";
import Text from "@/components/materials/text";
import { LoginIcon } from "@/utils/icon";
import styled from "styled-components";

export default function FormHeader() {
  return (
    <StyledFormHeader id="form-header">
      <div className="form-title">
        <h1>Se connecter</h1>
        <Icon Icon={LoginIcon} width={36} height={36} />
      </div>
      <Text>
        Entrez vos identifiants pour accéder à votre espace personnel.
      </Text>
    </StyledFormHeader>
  );
}

const StyledFormHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  text-align: center;

  .form-title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap-reverse;
    font-size: 32px;
    gap: 10px;
    h1 {
      font-size: 32px;
    }
  }
  span {
    text-align: center;
    color: #6a6a6a;
  }

  @media (min-width: 426px) {
    justify-content: start;
    .form-title {
      justify-content: start;
    }
    span {
      text-align: left;
    }
  }
`;
