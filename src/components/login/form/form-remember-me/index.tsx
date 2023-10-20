import { chivo } from "@/utils/font";
import Link from "next/link";
import styled from "styled-components";

export default function FormRememberMe() {
  return (
    <StyledFormRemeberMe className={chivo.className}>
      <div className="remember-me">
        <input className="check-remember" type="checkbox" name="" id="" />
        <span>Se souvenir de moi</span>
      </div>
      <Link href={"#"} className="forget-password">
        Mot de passe oublié ?
      </Link>
    </StyledFormRemeberMe>
  );
}

const StyledFormRemeberMe = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;

  .remember-me {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #252c46;

    .check-remember {
      position: relative;
      font: inherit;
      color: currentColor;
      width: 16px;
      height: 16px;
      border: 1px solid rgba(150, 150, 150);
      border-radius: 4px;

      &:before {
        position: absolute;
        content: "";
        display: block;
        top: 2px;
        left: 5px;
        width: 4px;
        height: 7px;
        border-style: solid;
        border-color: #fff;
        border-width: 0 2px 2px 0;

        transform: rotate(45deg);
      }
      &:checked {
        border: 1px solid ${({ theme }) => theme.secondary};
        background-color: ${({ theme }) => theme.secondary};
      }
    }
  }
  .forget-password {
    color: ${({ theme }) => theme.primary};
  }
`;
