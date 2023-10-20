import { chivo } from "@/utils/font";
import { useRouter } from "next/navigation";
import styled from "styled-components";

export default function FormFooter() {
  const router = useRouter();

  return (
    <StyledFormFooter className={chivo.className}>
      <button
        className="button-login"
        onClick={() => router.push("/dashboard")}
      >
        SE CONNECTER
      </button>
    </StyledFormFooter>
  );
}

const StyledFormFooter = styled.div`
  .button-login {
    padding: 18px;
    width: 100%;
    background-color: ${({ theme }) => theme.primary};
    color: white;
    border-radius: 8px;
    font-size: 18px;
    cursor: pointer;
  }
`;
