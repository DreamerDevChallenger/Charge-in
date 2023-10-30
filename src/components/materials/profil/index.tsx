import styled from "styled-components";
import Text from "../text";

interface PropProfilAvatar {
  width: number;
  height: number;
}

export const ProfilAvatar = ({ width, height }: PropProfilAvatar) => {
  return (
    <StyledProfilAvatar width={width} height={height}>
      <Text>P</Text>
    </StyledProfilAvatar>
  );
};

const StyledProfilAvatar = styled.div<PropProfilAvatar>`
  cursor: pointer;

  border-radius: 100%;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  min-height: ${({ height }) => height}px;
  min-width: ${({ width }) => width}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.secondary};

  .text {
    font-size: 18px;
    color: ${({ theme }) => theme.white};
  }
`;

export const ProfilUserName = () => {
  return <Text className="username">Prénom nom</Text>;
};

export const ProfilMail = () => {
  return <Text className="mail">prénom.nom@gmail.com</Text>;
};
