import styled from "styled-components";
import { Dispatch, SetStateAction, useState } from "react";
import Icon from "@/components/materials/icon";
import {
  ArrowBackIos,
  ArrowForwardIos,
  KeyboardArrowRight,
  KeyboardArrowRightSharp,
} from "@mui/icons-material";
import { PropUser } from "@/redux/reducers/users";
import Text from "@/components/materials/text";

export default function TableFooter({
  setEntries,
  paginate,
  entries,
  current,
  currentData,
  stateTable,
}: {
  setEntries: Dispatch<SetStateAction<number>>;
  paginate: (e: number) => void;
  entries: number;
  current: number;
  currentData: PropUser[];
  stateTable: PropUser[];
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const options = [
    { value: 5, name: 5 },
    { value: 10, name: 10 },
    { value: 25, name: 25 },
  ];

  const handleChange = (e: number) => {
    setEntries(e);
    paginate(1);
    setIsOpen(false);
  };

  const dataRange = Math.ceil(stateTable.length / entries);

  return (
    <StyledTableFooter>
      <div className="entries-container">
        Lignes par page : <Text className="entries">{entries} </Text>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`btn-entries ${isOpen ? "open" : "close"}`}
        >
          <Icon Icon={ArrowBackIos} width={16} height={16} />
        </button>
        {isOpen && (
          <div className="select">
            {options.map((option) => (
              <div
                key={option.value}
                className="option"
                onClick={() => handleChange(option.value)}
              >
                {option.name}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="showing">
        {entries * current - entries + 1}-
        {currentData.length + entries * current - entries} de{" "}
        {stateTable.length}
      </div>
      <div className="btn-container">
        <button
          className={`${current !== 1 ? "" : "disable "}btn next`}
          onClick={current !== 1 ? () => paginate(current - 1) : () => {}}
        >
          <Icon Icon={ArrowBackIos} width={16} height={16} />
        </button>

        <button
          className={`${current < dataRange ? "" : "disable "}btn next`}
          onClick={current < dataRange ? () => paginate(current + 1) : () => {}}
        >
          <Icon Icon={ArrowForwardIos} width={16} height={16} />
        </button>
      </div>
    </StyledTableFooter>
  );
}

const StyledTableFooter = styled.div`
  padding: 16px 24px;
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  flex-wrap: wrap;

  .btn-container {
    display: flex;
    align-items: center;
    gap: 8px;

    .btn {
      &.disable {
        visibility: hidden;
      }
    }
  }

  .entries-container {
    position: relative;

    .entries {
      color: ${({ theme }) => theme.gray_second};
    }

    .btn-entries {
      .icon {
        transform: rotateZ(-90deg);
      }

      &.open {
        .icon {
          transform: rotate(90deg) translateX(50%);
        }
      }
    }

    .select {
      position: absolute;
      bottom: 30px;
      right: 0;
      background: white;
      transform: translateX(25%);
      border-radius: 2px;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
      text-align: right;

      .option {
        cursor: pointer;
        padding: 2px 8px;

        &:hover {
          background: #fafafa;
        }
      }
    }
  }

  .icon {
    color: ${({ theme }) => theme.gray_second};
  }
`;
