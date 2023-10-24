"use client";

import PageTitle from "@/components/materials/page-title";
import Text from "@/components/materials/text";
import { useAppSelector } from "@/redux/hooks";
import { selectUser } from "@/redux/selectors";
import { PersonLargeIcon } from "@/utils/icon";
import Link from "next/link";
import styled from "styled-components";

interface Prop {
  profilData:
    | {
        id: number;
        first_name: string;
        last_name: string;
        charging: number;
        step: number;
      }
    | undefined;
}

export default function DashboardProfilHeader({ profilData }: Prop) {
  const { data } = useAppSelector(selectUser);

  const profilIndex = data.findIndex((object) => object.id === profilData?.id);

  const nextProfil = data[profilIndex + 1];
  const previousProfil = data[profilIndex - 1];

  const path = "/dashboard/house/in-progress/profil/";

  return (
    <StyledDashboardProfilHeader>
      <div className="link-profil-container">
        {previousProfil && (
          <Link
            href={`${path + previousProfil.id}`}
            className="previous link-profil-item"
          >
            <Text className="link-text">Précedent</Text>
            <Text>{previousProfil.first_name}</Text>
          </Link>
        )}
        {nextProfil && (
          <Link
            href={`${path + nextProfil.id}`}
            className="next link-profil-item"
          >
            <Text className="link-text">Suivant</Text>
            <Text>{nextProfil.first_name}</Text>
          </Link>
        )}
      </div>
      <PageTitle icon={PersonLargeIcon}>
        Profil : {profilData?.first_name} {profilData?.last_name}
      </PageTitle>
    </StyledDashboardProfilHeader>
  );
}

const StyledDashboardProfilHeader = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  .link-profil-container {
    display: flex;
    justify-content: space-between;
    .link-profil-item {
      display: flex;
      flex-direction: column;

      &.next {
        text-align: right;c
        align-self: flex-end;
        margin-left: auto;
        text-align: left;

      }

      &.previous {
        text-align: left;
      }

      .link-text {
        color: #8fa2a2;
      }
    }
  }
`;
