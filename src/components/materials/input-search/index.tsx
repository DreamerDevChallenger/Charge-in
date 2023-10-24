import styled from "styled-components";
import Icon from "../icon";
import { SearchIcon } from "@/utils/icon";
import { useState } from "react";

export default function InputSearch() {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <StyledInputSearch>
      {!isFocus && <Icon width={14} height={14} Icon={SearchIcon} />}
      <input
        type="text"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </StyledInputSearch>
  );
}

const StyledInputSearch = styled.div`
  border: 1px solid #e5e5e5;
  padding: 6px 12px;
  border-radius: 6px;
  background: ${({ theme }) => theme.white};
  display: flex;
  gap: 8px;
  input {
  }
`;
