import ButtonProfil from "@/components/materials/button-profil";
import styled from "styled-components";

export default function DashboardProfilInstaller() {
  return (
    <StyledInstaller>
      <div className="card">
        <h2>Installateur choisi</h2>
        <div className="card-container">
          <ButtonProfil onClick={() => {}}>
            Modifier l’installateur
          </ButtonProfil>
        </div>
      </div>
    </StyledInstaller>
  );
}

const StyledInstaller = styled.section``;
