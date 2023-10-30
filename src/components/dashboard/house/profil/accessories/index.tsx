import Text from "@/components/materials/text";
import styled from "styled-components";
import DashboardProfilPopIn from "../pop-in";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectOverlay } from "@/redux/selectors";
import ButtonProfil from "@/components/materials/button-profil";
import { useState } from "react";
import { toggleOverlay } from "@/redux/reducers/overlay";
import { dataAccessory } from "./data";

export default function DashboardProfilAccessories() {
  const [popIn, setPopIn] = useState(false);
  const { isOpen } = useAppSelector(selectOverlay);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleOverlay());
    setPopIn(true);
  };

  return (
    <StyledDashboardProfilAccessories>
      <div className="card">
        <h2>Accessoires</h2>
        <div className="card-container">
          <ul className="card-list card-grid">
            {dataAccessory.map((item, index) => (
              <li key={index} className="card-list-item">
                <Text className="label">{"Nom de l’accessoire"}</Text>
              </li>
            ))}
          </ul>
        </div>
        {isOpen && popIn && (
          <DashboardProfilPopIn
            title="les accessoires"
            accessory
            setState={setPopIn}
          />
        )}
        <div>
          <ButtonProfil onClick={handleClick}>
            Modifier les accessoires
          </ButtonProfil>
        </div>
      </div>
    </StyledDashboardProfilAccessories>
  );
}

const StyledDashboardProfilAccessories = styled.section`
  .card-list {
    gap: 36px;
    list-style: none;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    .card-list-item {
      justify-content: center;
    }
  }

  @media (min-width: 535.5px) {
    .card-list {
      .card-list-item {
        justify-content: start;
      }
    }
  }
`;
