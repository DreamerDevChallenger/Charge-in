import styled from "styled-components";

export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`;
