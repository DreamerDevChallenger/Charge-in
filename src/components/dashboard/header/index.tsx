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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap-reverse;
  gap: 24px;
  padding-bottom: 24px;

  &:before {
    content: "";
    display: block;
    position: absolute;
    bottom: 0px;
    width: 100%;
    left: 0%;
    border-top: 1px solid #e0e0e0;
  }

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
