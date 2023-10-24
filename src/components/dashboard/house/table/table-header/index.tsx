import Text from "@/components/materials/text";
import styled from "styled-components";
import { useAppSelector } from "@/redux/hooks";
import { selectUser } from "@/redux/selectors";
import InputSearch from "@/components/materials/input-search";

export default function TableHeader() {
  const { data } = useAppSelector(selectUser);

  return (
    <StyledTableHeader>
      <Text>
        {data.length} {data.length <= 1 ? "résultat" : "résultats"}
      </Text>
      <InputSearch />
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
