import { chivo } from "@/utils/font";
import styled from "styled-components";

export default function InputNumber() {
  return (
    <StyledInputNumber className={chivo.className}>
      <input type="number" name="number" placeholder="000" />
    </StyledInputNumber>
  );
}

const StyledInputNumber = styled.div`
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  padding: 5px 9px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.border};
  max-width: 350px;

  input {
    width: 100%;
  }
`;
