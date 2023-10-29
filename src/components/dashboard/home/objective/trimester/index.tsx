import { useState } from "react";
import styled from "styled-components";
import { dataObjective } from "../data";

export default function Trimester() {
  const [current, setCurrent] = useState<number>(3);

  return (
    <StyledTrimester>
      {dataObjective.trimester.map((item, index) => (
        <div
          key={index}
          className={`trimester-item ${current === index ? "current" : ""}`}
          onClick={() => setCurrent(index)}
        >
          <span>{item.length <= 4 ? `${item} trimestre` : item} </span>
        </div>
      ))}
    </StyledTrimester>
  );
}

const StyledTrimester = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;

  &::-webkit-scrollbar {
    display: none;
  }

  .trimester-item {
    cursor: pointer;
    background: ${({ theme }) => theme.background_secondary};
    padding: 6px 12px;
    border-radius: 8px;

    &.current {
      background: ${({ theme }) => theme.secondary_gradient};
    }

    span {
      white-space: nowrap;
    }
  }
`;
