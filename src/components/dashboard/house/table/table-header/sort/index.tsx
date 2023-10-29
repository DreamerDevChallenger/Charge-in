import styled from "styled-components";
import { useState } from "react";
import Text from "@/components/materials/text";
import Icon from "@/components/materials/icon";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { dataSort } from "./data";

export default function TableSort({
  setSort,
  sort,
  paginate,
}: {
  setSort: (e: "id" | "step" | "charging" | any) => void;
  sort: "id" | "step" | "charging";
  paginate: (e: number) => void;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (value: "id" | "step" | "charging" | string) => {
    paginate(1);
    setSort(value);
    setIsOpen(false);
  };

  return (
    <StyledTableSort>
      <div className="current" onClick={() => setIsOpen(!isOpen)}>
        <Text>
          Trier par :{" "}
          {dataSort
            .filter((item) => item.value === sort)
            .map((item, index) => (
              <span key={index}>{item.name}</span>
            ))}
        </Text>
        <Icon
          Icon={isOpen ? KeyboardArrowUp : KeyboardArrowDown}
          width={24}
          height={24}
        />
      </div>

      {isOpen && (
        <div className="list">
          {dataSort
            .filter((item) => item.value != sort)
            .map((item, index) => (
              <div
                className="list-item"
                key={index}
                onClick={() => handleClick(item.value)}
              >
                <Text>{item.name}</Text>
              </div>
            ))}
        </div>
      )}
    </StyledTableSort>
  );
}

const StyledTableSort = styled.div`
  position: relative;
  color: ${({ theme }) => theme.gray};
  font-weight: normal;
  .current {
    display: flex;
    gap: 10px;
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.gray_third};
    padding: 6px 12px;
  }

  .list {
    position: absolute;
    background: red;
    top: calc(100% + 10px);
    width: 100%;
    right: 0;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.gray_third};
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
    overflow: hidden;

    .list-item {
      color: ${({ theme }) => theme.gray};
      text-align: right;
      padding: 10px;
      cursor: pointer;

      &:hover {
        background: ${({ theme }) => theme.gray_fifth};
        color: ${({ theme }) => theme.black};
      }
    }
  }
`;
