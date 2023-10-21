import Text from "@/components/materials/text";
import styled from "styled-components";

export default function ProfilPicture() {
  return (
    <StyledProfilPicture>
      <Text>P</Text>
    </StyledProfilPicture>
  );
}

const StyledProfilPicture = styled.div`
  position: relative;
  border-radius: 100%;
  height: 47px;
  width: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.secondary};

  .text {
    font-size: 18px;
    color: ${({ theme }) => theme.white};
  }
`;
