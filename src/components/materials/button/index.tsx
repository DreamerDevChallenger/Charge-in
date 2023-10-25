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
  align-self: flex-end;
  padding: 6px 20px;
  border-radius: 8px;
  margin-left: auto;
  color: ${({ theme }) => theme.white};
  background: linear-gradient(
    123deg,
    ${({ theme }) =>
      `${theme.secondary_gradient.first}, ${theme.secondary_gradient.second}`}
  );

  .text {
    line-height: 24.6px;
  }
`;
