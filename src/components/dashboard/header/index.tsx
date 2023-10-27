"use client";

import styled from "styled-components";

import Text from "@/components/materials/text";

import ProfilPicture from "./profil-picture";
import Notification from "./notification";
import { ProfilUserName } from "@/components/materials/profil";

export default function HeaderDashboard() {
  return (
    <StyledHeaderDashboard>
      <Text>
        <span className="hello"> Bonjour, </span>
        <strong className="username">
          <ProfilUserName />
        </strong>
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

  .hello {
    color: ${({ theme }) => theme.black_third};
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

  .pop-in {
    z-index: 5;
    position: absolute;
    top: 60px;
    right: 0;
    padding: 18px 0;
    background: white;
    border-radius: 12px;
    box-shadow: 0px 4px 16px 0px rgba(180, 189, 189, 0.25);
    opacity: 0;
    visibility: hidden;
    transition: 0.5s;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    width: 100%;

    .title {
      font-weight: 600;
      font-size: 18px;
      padding: 0 24px;
    }

    .pop-in-footer {
      display: flex;
      align-items: center;
      padding: 16px 24px 0;
      gap: 12px;
      flex-wrap: wrap;
    }

    .pop-in-item {
      border-bottom: 1px solid #e5e5e5;
      padding: 20px 24px;
    }
  }
`;
