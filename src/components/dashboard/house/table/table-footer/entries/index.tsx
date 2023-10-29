import Icon from "@/components/materials/icon";
import Text from "@/components/materials/text";
import { ArrowBackIos } from "@mui/icons-material";
import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";

export default function TableEntries({
  setEntries,
  entries,
  paginate,
}: {
  setEntries: Dispatch<SetStateAction<number>>;
  paginate: (e: number) => void;
  entries: number;
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

  return (
    <StyledTableEntries>
      Lignes par page : <Text className="entries">{entries} </Text>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Button entries"
        className={`btn-entries ${isOpen ? "open" : "close"}`}
      >
        <Icon Icon={ArrowBackIos} width={16} height={16} />
      </button>
      {isOpen && (
        <div className="select">
          {options
            .filter((option) => option.value !== entries)
            .map((option) => (
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
    </StyledTableEntries>
  );
}

const StyledTableEntries = styled.div`
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
    bottom: 100%;
    right: 0;
    background: white;
    transform: translateX(25%);
    border-radius: 2px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    text-align: right;
    color: ${({ theme }) => theme.gray_second};

    .option {
      cursor: pointer;
      padding: 2px 8px;

      &:hover {
        background: #fafafa;
      }
    }
  }
`;
