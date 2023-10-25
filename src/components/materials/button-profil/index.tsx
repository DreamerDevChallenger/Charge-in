import styled from "styled-components";
import Text from "../text";

export default function ButtonProfil({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <StyledButtonProfil onClick={onClick}>
      <Text>{children}</Text>
    </StyledButtonProfil>
  );
}

const StyledButtonProfil = styled.button`
  border-radius: 8px;
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.primary};
  padding: 10px 22px;
  font-size: 18px;
`;
