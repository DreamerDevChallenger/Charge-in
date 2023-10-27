"use client";

import { PropProfil } from "@/app/dashboard/house/in-progress/profil/[id]/layout";
import Icon from "@/components/materials/icon";
import Text from "@/components/materials/text";
import { useAppSelector } from "@/redux/hooks";
import { selectUser } from "@/redux/selectors";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import Link from "next/link";
import styled from "styled-components";

export default function DashboardProfilLink({ profilData }: PropProfil) {
  const { data } = useAppSelector(selectUser);

  const profilIndex = data.findIndex((object) => object.id === profilData?.id);

  const nextProfil = data[profilIndex + 1];
  const previousProfil = data[profilIndex - 1];

  const path = "/dashboard/house/in-progress/profil/";

  return (
    <StyledDashboardProfilLink>
      {previousProfil && (
        <Link
          href={`${path + previousProfil.id}`}
          className="link-profil-item previous"
        >
          <Icon Icon={ArrowBackIosNew} width={18} height={18} />
          <div className="link-content">
            <Text className="link-text">Précedent</Text>
            <Text>
              {previousProfil.first_name} {previousProfil.last_name}
            </Text>
          </div>
        </Link>
      )}
      {nextProfil && (
        <Link
          href={`${path + nextProfil.id}`}
          className="next link-profil-item"
        >
          <div className="link-content">
            <Text className="link-text">Suivant</Text>
            <Text>
              {nextProfil.first_name} {nextProfil.last_name}
            </Text>
          </div>
          <Icon Icon={ArrowForwardIos} width={18} height={18} />
        </Link>
      )}
    </StyledDashboardProfilLink>
  );
}

const StyledDashboardProfilLink = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;

  .link-profil-item {
    display: flex;
    align-items: center;
    gap: 10px;
    .icon {
      color: ${({ theme }) => theme.primary};
    }

    .link-content {
      display: flex;
      flex-direction: column;
    }
    &.previous {
      text-align: right;
    }

    &.next {
      text-align: left;
      margin-left: auto;
    }

    .link-text {
      color: ${({ theme }) => theme.gray_second};
    }
  }
`;
