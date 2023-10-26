import Text from "@/components/materials/text";
import styled from "styled-components";

export default function ButtonHouse({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "add" | "delete";
}) {
  return (
    <StyledButtonHouse className={type}>
      <Text>{children}</Text>
    </StyledButtonHouse>
  );
}

const StyledButtonHouse = styled.button`
  color: ${({ theme }) => theme.white};
  padding: 10px 22px;
  height: fit-content;
  border-radius: 8px;
  font-size: 18px;

  &.add {
    background: ${({ theme }) => theme.primary};
  }

  &.delete {
    background: ${({ theme }) => theme.error};
  }
`;
