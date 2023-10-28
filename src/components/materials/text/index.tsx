import styled from "styled-components";
import { chivo } from "@/utils/font";

export default function Text({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <StyledText className={`${className ? `${className} ` : ""}text`}>
      {children}
    </StyledText>
  );
}

const StyledText = styled.span`
  color: inherit;
`;
