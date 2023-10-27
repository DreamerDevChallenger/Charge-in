import styled from "styled-components";
import Icon from "../icon";
import { useState } from "react";
import { Search } from "@mui/icons-material";

export default function InputSearch({
  onSearch,
}: {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e);
  };

  return (
    <StyledInputSearch className="input-container">
      {!isFocus && <Icon width={18} height={18} Icon={Search} />}
      <input
        type="text"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={handleChange}
        placeholder="Rechercher"
      />
    </StyledInputSearch>
  );
}

const StyledInputSearch = styled.div`
  border: 1px solid ${({ theme }) => theme.gray_third};
  padding: 6px 12px;
  border-radius: 6px;
  background: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  gap: 8px;

  .icon {
    color: ${({ theme }) => theme.gray_second};
  }

  input {
    font-size: 16px;
    width: 100%;
    &::placeholder {
      color: ${({ theme }) => theme.gray_second};
    }
  }
`;
