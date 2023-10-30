import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import styled from "styled-components";
import Icon from "../icon";

export default function ButtonPopIn({
  children,
  onClick,
  icon,
}: {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}) {
  return (
    <StyledButtonPopIn onClick={onClick}>
      <Icon Icon={icon} width={20} height={20} /> {children}
    </StyledButtonPopIn>
  );
}

const StyledButtonPopIn = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  align-self: flex-end;
  padding: 6px 20px;
  border-radius: 8px;
  margin-left: auto;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.secondary_gradient};

  .text {
    line-height: 24.6px;
  }
`;
