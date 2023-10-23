import { useState } from "react";
import styled from "styled-components";
import { dataObjective } from "../data";

export default function Trimester() {
  const [current, setCurrent] = useState<number>(0);

  return (
    <StyledTrimester>
      {dataObjective.trimester.map((item, index) => (
        <div
          key={index}
          className={`trimester-item ${current === index ? "current" : ""}`}
          onClick={() => setCurrent(index)}
        >
          <span>{item} trimestre</span>
        </div>
      ))}

      <div className={`trimester-item`}>
        <span>année 2023</span>
      </div>
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
      background: linear-gradient(
        123deg,
        ${({ theme }) =>
          `${theme.secondary_gradient.first}, ${theme.secondary_gradient.second}`}
      );
    }
    span {
      white-space: nowrap;
    }
  }
`;
