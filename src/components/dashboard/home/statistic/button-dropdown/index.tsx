import { useState } from "react";
import styled from "styled-components";
import { dataDate } from "./data";
import Text from "@/components/materials/text";
import Icon from "@/components/materials/icon";
import { ArrowBackIosNew } from "@mui/icons-material";

export default function ButtonDropdown() {
  const [currentValue, setCurrent] = useState<string>(dataDate[0]);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <StyledButtonDropdown className={`${open ? "open " : ""} dropdown`}>
      <div className={`current`} onClick={() => setOpen(!open)}>
        <Text>{currentValue}</Text>
        <button aria-label={`button toggle dropdown statistic`}>
          <Icon Icon={ArrowBackIosNew} width={16} height={16} />
        </button>
      </div>

      <div className="option-container">
        {dataDate.map(
          (item, index) =>
            item !== currentValue && (
              <div
                key={index}
                className="option-item"
                onClick={() => {
                  setOpen(false), setCurrent(item);
                }}
              >
                <Text>{item}</Text>
              </div>
            )
        )}
      </div>
    </StyledButtonDropdown>
  );
}

const StyledButtonDropdown = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 12px;

  &.open {
    .current {
      .icon {
        transform: rotate(90deg);
      }
    }

    .option-container {
      visibility: visible;
      opacity: 1;
    }
  }

  .option-container {
    position: absolute;

    background: ${({ theme }) => theme.white};
    top: 0;
    right: 0;
    width: 100%;
    visibility: hidden;
    opacity: 0;
    transform: translateY(48px);
    border: 1px solid rgba(0, 0, 0, 0.1);
    .option-item {
      padding: 10px 12px;
      cursor: pointer;
    }
    border-radius: 12px;
  }

  .current {
    cursor: pointer;

    color: ${({ theme }) => theme.white};
    border-radius: 8px;
    padding: 10px 12px;
    background: linear-gradient(
      123deg,
      ${({ theme }) =>
        `${theme.secondary_gradient.first}, ${theme.secondary_gradient.second}`}
    );
    display: flex;
    align-items: center;
    gap: 36px;

    .icon {
      transform: rotate(-90deg);
    }
  }
`;
