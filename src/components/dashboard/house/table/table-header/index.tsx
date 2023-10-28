import Text from "@/components/materials/text";
import styled from "styled-components";
import { useAppSelector } from "@/redux/hooks";
import { selectUser } from "@/redux/selectors";
import InputSearch from "@/components/materials/input-search";
import { PropUser } from "@/redux/reducers/users";
import TableSort from "./sort";

export default function TableHeader({
  setStateTable,
  paginate,
  setSort,
  sort,
}: {
  paginate: (e: number) => void;
  setStateTable: (e: Array<object>) => void;
  setSort: (e: "id" | "charging" | "step") => void;
  sort: "id" | "charging" | "step";
}) {
  const { data } = useAppSelector(selectUser);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = data.filter(
      (state: {
        id: number;
        first_name: string;
        last_name: string;
        charging: number;
        step: number;
      }) => {
        const event = e.target.value.toLowerCase();

        return (
          state.first_name.toLowerCase().includes(event) ||
          state.last_name.toLowerCase().includes(event)
        );
      }
    );
    paginate(1);
    setStateTable(search);
  };

  return (
    <StyledTableHeader>
      <Text>
        {data.length} {data.length <= 1 ? "résultat" : "résultats"}
      </Text>
      <InputSearch onSearch={onSearch} />
      <TableSort setSort={setSort} sort={sort} />
    </StyledTableHeader>
  );
}

const StyledTableHeader = styled.header`
  padding: 16px 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
  font-weight: 600;
  font-size: 18px;
  border-bottom: 2px solid #fafafa;
`;
