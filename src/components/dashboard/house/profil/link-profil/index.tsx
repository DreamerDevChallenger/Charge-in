import { PropProfil } from "@/app/dashboard/house/in-progress/profil/[id]/layout";
import Text from "@/components/materials/text";
import { useAppSelector } from "@/redux/hooks";
import { selectUser } from "@/redux/selectors";
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
    </StyledDashboardProfilLink>
  );
}

const StyledDashboardProfilLink = styled.div`
  display: flex;
  justify-content: space-between;
  .link-profil-item {
    display: flex;
    flex-direction: column;

    &.previous {
      text-align: right;
    }

    &.next {
      text-align: left;
      margin-left: auto;
    }

    .link-text {
      color: #8fa2a2;
    }
  }
`;
