import Icon from "@/components/materials/icon";
import Text from "@/components/materials/text";
import { Mail, Phone } from "@mui/icons-material";
import styled from "styled-components";

export default function PersonalInformation() {
  return (
    <StyledPersonalInformation className="card">
      <h2>Informations personnelles</h2>
      <div className="card-wrapper">
        <div className="card-item">
          <Text className="label">Prénom</Text>
          <Text className="value">Prénom</Text>
        </div>
        <div className="card-item">
          <Text className="label">Nom</Text>
          <Text className="value">Nom</Text>
        </div>
        <div className="card-item">
          <Text className="label">Code Postal</Text>
          <Text className="value">Code Posta</Text>
        </div>
        <div className="card-item">
          <Text className="label">Adresse</Text>
          <Text className="value">Adresse</Text>
        </div>
        <div className="card-row">
          <Icon Icon={Mail} width={16} height={16} />
          <div className="card-item">
            <Text className="label">E-mail (maps)</Text>
            <Text className="value">charles.dupont@gmail.com</Text>
          </div>
        </div>
        <div className="card-row">
          <Icon Icon={Phone} width={16} height={16} />
          <div className="card-item">
            <Text className="label">Téléphone</Text>
            <Text className="number">01 23 45 67 89</Text>
          </div>
        </div>
      </div>
    </StyledPersonalInformation>
  );
}

const StyledPersonalInformation = styled.div`
  .card-wrapper {
    gap: 18px;

    .card-row {
      gap: 8px 16px;

      .icon {
        color: ${({ theme }) => theme.primary};
      }
      .number {
        color: ${({ theme }) => theme.primary};
      }
    }
  }
`;
