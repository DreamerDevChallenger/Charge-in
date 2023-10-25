import Text from "@/components/materials/text";
import styled from "styled-components";
import { useAppSelector } from "@/redux/hooks";
import { selectUser } from "@/redux/selectors";
import InputSearch from "@/components/materials/input-search";

export default function TableHeader({
  stateTable,
  setStateTable,
  paginate,
}: {
  paginate: (e: number) => void;
  setStateTable: (e: any) => void;
  stateTable: {
    id: number;
    first_name: string;
    last_name: string;
    charging: number;
    step: number;
  }[];
}) {
  const { data } = useAppSelector(selectUser);

  const onSearch = (e: any) => {
    const search = stateTable.filter(
      (state: {
        id: number;
        first_name: string;
        last_name: string;
        charging: number;
        step: number;
      }) =>
        state.first_name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    paginate(1);
    setStateTable(search);
    console.log(search);
  };

  return (
    <StyledTableHeader>
      <Text>
        {data.length} {data.length <= 1 ? "résultat" : "résultats"}
      </Text>
      <InputSearch onSearch={onSearch} />
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