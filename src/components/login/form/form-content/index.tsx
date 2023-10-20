import FormControl from "@/components/materials/form-control";
import styled from "styled-components";

export default function FormContent() {
  return (
    <StyledFormContent method="post">
      <FormControl
        label="Email"
        htmlFor="email"
        placeholder="adresse@mail.com"
      />
      <FormControl
        label="Mot de passe"
        htmlFor="password"
        isPassword
        placeholder="******"
      />
    </StyledFormContent>
  );
}

const StyledFormContent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
