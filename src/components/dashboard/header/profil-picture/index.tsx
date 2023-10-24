import Text from "@/components/materials/text";
import styled from "styled-components";
import ProfilPopIn from "./pop-in";
import { useState } from "react";
import { ProfilAvatar } from "@/components/materials/profil";

export default function ProfilPicture() {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <StyledProfilPicture
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      /* onClick={()=> setIsHover(!isHover)} */
      className={`${isHover ? "hover " : ""}profil`}
    >
      <ProfilAvatar width={47} height={47} />
      <ProfilPopIn />
    </StyledProfilPicture>
  );
}

const StyledProfilPicture = styled.div`
  &.hover {
    .pop-in {
      visibility: visible;
      opacity: 1;
    }
  }
`;
