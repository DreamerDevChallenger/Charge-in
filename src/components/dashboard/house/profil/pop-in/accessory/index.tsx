import Text from "@/components/materials/text";
import { useState } from "react";
import styled from "styled-components";

export default function DashboardProfilPopInAccessory() {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <StyledAccessory
      onClick={() => setChecked(!checked)}
      className={checked ? "checked" : "unchecked"}
    >
      <Text>Nom de l’accessoire - 12€</Text>
      <input
        type="checkbox"
        onChange={() => setChecked(!checked)}
        checked={checked}
        name=""
        id=""
      />
    </StyledAccessory>
  );
}

const StyledAccessory = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  gap: 12px 50px;
  padding: 12px 16px;
  border-radius: 4px;
  cursor: pointer;

  input {
    width: 24px;
    height: 24px;
    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.primary};
  }

  &.checked {
    background: rgba(54, 207, 198, 0.05);
    border: 1px solid ${({ theme }) => theme.primary};

    input {
      position: relative;
      background: ${({ theme }) => theme.primary};

      &:before {
        position: absolute;
        content: "";
        display: block;
        top: 2.5px;
        left: 8px;
        width: 5px;
        height: 13px;
        border-style: solid;
        border-color: #fff;
        border-width: 0 2.5px 2.5px 0;
        transform: rotate(45deg);
      }
    }
  }

  &.unchecked {
    background: ${({ theme }) => theme.white};
    border: 1px solid #dce6e5;
  }
`;
