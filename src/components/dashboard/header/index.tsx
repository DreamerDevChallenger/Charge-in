"use client";

import styled from "styled-components";

import Text from "@/components/materials/text";

import ProfilPicture from "./profil-picture";
import Notification from "./notification";

export default function HeaderDashboard() {
  return (
    <StyledHeaderDashboard>
      <Text>
        Bonjour, <strong className="username">Prénom Nom</strong>
      </Text>
      <div className="pop-container">
        <Notification />
        <ProfilPicture />
      </div>
    </StyledHeaderDashboard>
  );
}

const StyledHeaderDashboard = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap-reverse;
  gap: 24px;

  span {
    color: #282828;
    font-weight: 600;
  }

  .pop-container {
    display: flex;
    gap: 24px;
    align-items: center;
  }

  .username {
    color: ${({ theme }) => theme.primary};
  }
`;
