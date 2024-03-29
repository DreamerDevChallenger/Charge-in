"use client";

import { useAppSelector } from "@/redux/hooks";
import styled from "styled-components";
import { useState, useEffect } from "react";

import TableContainer from "./table-container";
import TableHeader from "./table-header";
import TableFooter from "./table-footer";
import { selectUser } from "@/redux/selectors";
import { PropUser } from "@/redux/reducers/users";

export default function DashboardHouseTable() {
  const { data } = useAppSelector(selectUser);

  const [current, setCurrent] = useState<number>(1);
  const [entries, setEntries] = useState<number>(5);
  const [stateTable, setStateTable] = useState<PropUser[]>([]);
  const [sort, setSort] = useState<"id" | "step" | "charging">("id");

  const indexOfLastPage = current * entries;
  const indexOfFirstPage = indexOfLastPage - entries;
  const currentData = stateTable
    .slice()
    .sort((a, b) => a[sort] - b[sort])
    .slice(indexOfFirstPage, indexOfLastPage);

  const paginate = (pageNumber: number) => {
    return setCurrent(pageNumber);
  };

  useEffect(() => {
    setStateTable(data);
  }, [data]);

  return (
    <StyledDashboardHouseTable>
      <TableHeader
        setStateTable={setStateTable}
        paginate={paginate}
        sort={sort}
        setSort={setSort}
      />
      <div className="table-wrapper">
        <TableContainer currentData={currentData} />
      </div>
      <TableFooter
        paginate={paginate}
        setEntries={setEntries}
        entries={entries}
        current={current}
        currentData={currentData}
        stateTable={stateTable}
      />
    </StyledDashboardHouseTable>
  );
}

const StyledDashboardHouseTable = styled.section`
  background: ${({ theme }) => theme.white};
  border-radius: 16px;
  box-shadow: 0px 4px 16px 0px rgba(176, 189, 189, 0.16);
  max-width: 1200px;

  .table-wrapper {
    overflow: auto;
    max-height: 350px;
  }
`;
