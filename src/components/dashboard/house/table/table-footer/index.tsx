import styled from "styled-components";
import { Dispatch, SetStateAction } from "react";
import { selectUser } from "@/redux/selectors";
import { useAppSelector } from "@/redux/hooks";
import Icon from "@/components/materials/icon";
import { ArrowBackIos } from "@mui/icons-material";

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
  currentData: {
    id: number;
    first_name: string;
    last_name: string;
    charging: number;
    step: number;
  }[];
  stateTable: {
    id: number;
    first_name: string;
    last_name: string;
    charging: number;
    step: number;
  }[];
}) {
  const { data } = useAppSelector(selectUser);

  const options = [
    { value: 5, name: 5 },
    { value: 10, name: 10 },
    { value: 25, name: 25 },
  ];

  const handleChange = (e: any) => {
    setEntries(parseInt(e.target.value));
    paginate(1);
  };

  return (
    <StyledTableFooter>
      <div className="lign-page">
        Lignes par page :{" "}
        <select onChange={handleChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <div className="showing">
        {entries * current - entries + 1}-
        {currentData.length + entries * current - entries} de{" "}
        {stateTable.length}
      </div>
      <div className="btn-container">
        <button
          className="btn previous"
          onClick={current !== 1 ? () => paginate(current - 1) : () => {}}
        >
          <Icon Icon={ArrowBackIos} width={16} height={16} />
        </button>
        <button
          className="btn next"
          onClick={
            current < data.length / entries
              ? () => paginate(current + 1)
              : () => {}
          }
        >
          <Icon Icon={ArrowBackIos} width={16} height={16} />
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
    gap: 8px;
    .previous {
      transform: rotate(0);
    }
    .next {
      transform: rotate(180deg);
    }
  }

  select {
    background: red;
  }
`;
