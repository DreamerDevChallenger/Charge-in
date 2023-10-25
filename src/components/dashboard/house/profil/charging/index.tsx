import ButtonProfil from "@/components/materials/button-profil";
import Text from "@/components/materials/text";
import styled from "styled-components";

export default function DashboardProfilCharging() {
  return (
    <StyledCharging>
      <div className="card">
        <h2>Borne choisie</h2>
        <div className="card-container">
          <ButtonProfil onClick={() => {}}>Modifier la borne</ButtonProfil>
        </div>
      </div>
    </StyledCharging>
  );
}

const StyledCharging = styled.section``;
