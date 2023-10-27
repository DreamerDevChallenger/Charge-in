import Icon from "@/components/materials/icon";
import { useAppSelector } from "@/redux/hooks";
import { selectComment } from "@/redux/selectors";
import { chivo } from "@/utils/font";
import { ArrowDownward } from "@mui/icons-material";
import styled from "styled-components";
import FirstComment from "./first-comment";

export default function DashboardProfilCommentary() {
  const { data } = useAppSelector(selectComment);

  return (
    <StyledCommentary>
      <div className="card">
        <h2 className="comment-title">
          Commentaires <div className="number-comment">{data.length}</div>
        </h2>
        <div className="card-container border">
          <textarea
            id="textarea"
            className={`${chivo.className} comment-input`}
            placeholder="Ajouter un commentaire..."
          />

          <button className="button-sent" aria-label={`button sent comment`}>
            <Icon Icon={ArrowDownward} height={20} width={20} />
          </button>
        </div>
        <FirstComment />
      </div>
    </StyledCommentary>
  );
}

const StyledCommentary = styled.section`
  .comment-title {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;

    .number-comment {
      width: 40px;
      height: 40px;
      padding: 4px;

      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      background-color: ${({ theme }) => theme.gray_fifth};
    }
  }
  .border {
    border-bottom: 1px solid ${({ theme }) => theme.background_primary};
    padding-bottom: 24px;
  }

  .card-container {
    position: relative;
    .button-sent {
      position: absolute;
      top: 12px;
      right: 20px;
      color: ${({ theme }) => theme.white};
      background: ${({ theme }) => theme.primary};
      border-radius: 50%;
    }
    .comment-input {
      width: 100%;
      height: 102px;
      padding: 12px 40px 12px 20px;
      box-sizing: border-box;
      border-radius: 8px;
      background-color: #f4f8f6;
      border: 0;
      font-size: 16px;
      resize: none;
      outline: none;

      &::placeholder {
        color: ${({ theme }) => theme.black};
        font-size: 18px;
        font-weight: 400;
      }
    }
  }
`;
