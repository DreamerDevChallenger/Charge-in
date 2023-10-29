import styled from "styled-components";
import { Dispatch, SetStateAction } from "react";
import Icon from "@/components/materials/icon";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { PropUser } from "@/redux/reducers/users";
import TableEntries from "./entries";

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
  const dataRange = Math.ceil(stateTable.length / entries);

  return (
    <StyledTableFooter>
      <TableEntries
        entries={entries}
        paginate={paginate}
        setEntries={setEntries}
      />
      <div className="showing">
        {entries * current - entries + 1}-
        {currentData.length + entries * current - entries} de{" "}
        {stateTable.length}
      </div>
      <div className="btn-container">
        <button
          className={`${current !== 1 ? "" : "disable "}btn previous`}
          aria-label="Button previous"
          onClick={current !== 1 ? () => paginate(current - 1) : () => {}}
        >
          <Icon Icon={ArrowBackIos} width={16} height={16} />
        </button>

        <button
          className={`${current < dataRange ? "" : "disable "}btn next`}
          aria-label="Button next"
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

  .icon {
    color: ${({ theme }) => theme.gray_second};
  }
`;
