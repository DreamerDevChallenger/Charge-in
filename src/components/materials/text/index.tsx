import styled from "styled-components";
import { chivo } from "@/utils/font";

export default function Text({ children }: { children: React.ReactNode }) {
  return (
    <StyledText className={`${chivo.className} text`}>{children}</StyledText>
  );
}

const StyledText = styled.span`
  color: inherit;
`;
