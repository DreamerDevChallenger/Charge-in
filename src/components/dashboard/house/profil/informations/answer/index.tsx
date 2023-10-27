import Text from "@/components/materials/text";
import styled from "styled-components";

export default function InformationAnswer() {
  return (
    <StyledAnswer className="card">
      <h2>Réponses au questionnaire</h2>
      <div className="card-wrapper">
        <div className="card-container">
          <div className="card-row card-space-between">
            <div className="card-item">
              <Text className="label">Je vis dans</Text>
              <Text className="value">Un appartement</Text>
            </div>
            <div className="card-item">
              <Text className="label">Ma place de parking</Text>
              <Text className="value">À l’intérieur</Text>
            </div>
            <div className="card-item">
              <Text className="label">Je suis</Text>
              <Text className="value">Propriétaire</Text>
            </div>
          </div>
          <div className="card-row card-item">
            <Text className="label">
              Notification d’un refus de la part de votre copropriété ?
            </Text>
            <Text className="value">Non</Text>
          </div>
        </div>
        <div className="card-container">
          <div className="card-item">
            <Text className="label">Achat</Text>
            <Text className="value">
              J’ai commandé mon véhicule électrique mais je ne l’ai pas encore
            </Text>
          </div>
          <div className="card-row card-item">
            <Text className="label">Modèle</Text>
            <Text className="value">Mercedes-EQS-SUV-500-4MATIC</Text>
          </div>
          <div className="card-row">
            <div className="card-item">
              <Text className="label">Usage</Text>
              <Text className="value">Autoroute & ville</Text>
            </div>
            <div className="card-item">
              <Text className="label">Capacité nominale de la batterie</Text>
              <Text className="value">118 kWh</Text>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card-row">
            <Text className="label">Délai d’installation de la borne</Text>
            <Text className="value">3 mois</Text>
          </div>
          <div className="card-row">
            <Text className="label">
              Avez-vous déjà contacté un installateur ?
            </Text>
            <Text className="value">Oui</Text>
          </div>

          <div className="card-row card-space-between">
            <div className="card-item">
              <Text className="label">Le prix</Text>
              <Text className="value">##€</Text>
            </div>
            <div className="card-item">
              <Text className="label">Installateur</Text>
              <Text className="value">information ici</Text>
            </div>
            <div className="card-item">
              <Text className="label">Modèle borne</Text>
              <Text className="value">information ici</Text>
            </div>
            <div className="card-item">
              <Text className="label">Marque borne</Text>
              <Text className="value">information ici</Text>
            </div>
          </div>
        </div>
      </div>
    </StyledAnswer>
  );
}

const StyledAnswer = styled.div``;
