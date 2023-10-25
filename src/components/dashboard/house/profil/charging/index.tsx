import ButtonProfil from "@/components/materials/button-profil";
import styled from "styled-components";
import DashboardProfilBox from "../box";
import chargin from "@/assets/charging.png";
import DashboardProfilPopIn from "../pop-in";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectOverlay } from "@/redux/selectors";
import { toggleOverlay } from "@/redux/reducers/overlay";
import { useState } from "react";
import { dataBoxCharging } from "../box/data";

export default function DashboardProfilCharging() {
  const [popIn, setPopIn] = useState(false);
  const { isOpen } = useAppSelector(selectOverlay);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleOverlay());
    setPopIn(true);
  };

  return (
    <StyledCharging>
      <div className="card">
        <h2>Borne choisie</h2>
        <DashboardProfilBox img={chargin} data={dataBoxCharging} />
        <div className="card-container">
          <ButtonProfil onClick={handleClick}>Modifier la borne</ButtonProfil>
        </div>
        {isOpen && popIn && (
          <DashboardProfilPopIn
            title="la borne"
            description="En changeant la borne, vous devrez changer d’installateur."
            setState={setPopIn}
          />
        )}
      </div>
    </StyledCharging>
  );
}

const StyledCharging = styled.section``;
