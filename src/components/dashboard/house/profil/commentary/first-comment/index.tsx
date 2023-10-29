import styled from "styled-components";
import { useAppSelector } from "@/redux/hooks";
import { selectComment } from "@/redux/selectors";
import ButtonProfil from "@/components/materials/button-profil";
import Text from "@/components/materials/text";

export default function FirstComment() {
  const { data } = useAppSelector(selectComment);
  const recent = data.reduce((a, b) => (a.date > b.date ? a : b));

  return (
    <StyledFirstComment className="card-container">
      <div className="comment-profil">
        {recent.first_name.slice(0, 1).toUpperCase()}
      </div>
      <div className="comment-info">
        <div className="user">
          <Text className="username">
            {recent.first_name} {recent.last_name}
          </Text>

          <Text className="date">
            Le {recent.date.replaceAll("-", "/").replaceAll(" ", ", à ")}
          </Text>
        </div>

        <div className="comment-content">
          <Text>{recent.comment}</Text>
        </div>
        <div className="button-container">
          <ButtonProfil onClick={() => {}}>
            Historique des commentaires
          </ButtonProfil>
        </div>
      </div>
    </StyledFirstComment>
  );
}

const StyledFirstComment = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  gap: 12px;
  .comment-profil {
    border-radius: 100%;
    padding: 10px;
    min-width: 36px;
    max-width: 36px;
    height: 36px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.secondary_gradient};
  }

  .comment-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    .user {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      .username {
        font-weight: bold;
        white-space: nowrap;
      }
      .date {
        color: ${({ theme }) => theme.gray_second};
      }
    }

    .comment-content {
      color: ${({ theme }) => theme.black_third};
    }

    .button-container {
      margin-top: 16px;
      button {
        font-size: 16px;
        padding: 6px 12px;
      }
    }
  }

  @media (min-width: 450px) {
    flex-direction: row;
  }
`;
