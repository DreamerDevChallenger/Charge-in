import ButtonProfil from "@/components/materials/button-profil";
import styled from "styled-components";
import DashboardProfilBox from "../box";
import installer from "@/assets/installer.png";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectOverlay } from "@/redux/selectors";
import { toggleOverlay } from "@/redux/reducers/overlay";
import { useState } from "react";
import DashboardProfilPopIn from "../pop-in";
import { dataBoxCharging } from "../box/data";

export default function DashboardProfilInstaller() {
  const [popIn, setPopIn] = useState(false);
  const { isOpen } = useAppSelector(selectOverlay);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleOverlay());
    setPopIn(true);
  };

  const condition = isOpen && popIn;

  return (
    <StyledInstaller>
      <div className="card">
        <h2>Installateur choisi</h2>
        <DashboardProfilBox img={installer} data={dataBoxCharging} />
        <div className="card-container">
          <ButtonProfil onClick={handleClick}>
            Modifier l’installateur
          </ButtonProfil>
        </div>
        {condition && (
          <DashboardProfilPopIn setState={setPopIn} title="l'installateur" />
        )}
      </div>
    </StyledInstaller>
  );
}

const StyledInstaller = styled.section``;
