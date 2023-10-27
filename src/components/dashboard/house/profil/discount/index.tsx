import ButtonProfil from "@/components/materials/button-profil";
import InputNumber from "@/components/materials/input-number";
import Text from "@/components/materials/text";
import styled from "styled-components";

export default function DashboardProfilDiscount() {
  return (
    <StyledDiscount>
      <div className="card">
        <h2>Remise de prix</h2>
        <div className="card-container">
          <Text className="label">Indiquez la remise à ajouter </Text>
        </div>
        <div className="card-container">
          <InputNumber />
        </div>
        <div className="card-container">
          <ButtonProfil onClick={() => {}}>Enregistrer</ButtonProfil>
        </div>
      </div>
    </StyledDiscount>
  );
}

const StyledDiscount = styled.section``;
