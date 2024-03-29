import Text from "@/components/materials/text";
import { Login } from "@mui/icons-material";
import styled from "styled-components";

export default function FormHeader() {
  return (
    <StyledFormHeader id="form-header">
      <div className="form-title">
        <h1>Se connecter</h1>
        <Login />
      </div>
      <Text>Entrez vos identifiants pour accéder à votre espace personnel</Text>
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
    color: ${({ theme }) => theme.document};
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

  svg {
    color: ${({ theme }) => theme.primary};
  }
`;
