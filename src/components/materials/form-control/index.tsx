import { chivo } from "@/utils/font";
import { EyeOutlineIcon, EyeOutlineOffIcon } from "@/utils/icon";
import { useState } from "react";
import styled from "styled-components";
import Icon from "../icon";

interface FormControlProps {
  label: string;
  isPassword?: boolean;
  htmlFor: string;
  placeholder: string;
}

export default function FormControl({
  label,
  isPassword,
  htmlFor,
  placeholder,
}: FormControlProps) {
  const [show, setShow] = useState(false);

  return (
    <StyledFormControl className={chivo.className}>
      <label htmlFor={htmlFor}>{label}</label>

      <div className="input-container">
        {isPassword ? (
          <>
            <input
              type={show ? "text" : "password"}
              id={htmlFor}
              className={chivo.className}
              placeholder={placeholder}
              autoComplete="current-password"
            />
            <div className="icon-container" onClick={() => setShow(!show)}>
              {show ? (
                <Icon Icon={EyeOutlineOffIcon} width={24} height={24} />
              ) : (
                <Icon Icon={EyeOutlineIcon} width={24} height={24} />
              )}
            </div>
          </>
        ) : (
          <input
            type="text"
            id={htmlFor}
            className={chivo.className}
            placeholder={placeholder}
            autoComplete="username"
          />
        )}
      </div>
    </StyledFormControl>
  );
}

const StyledFormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    font-size: 18px;
  }

  .input-container {
    position: relative;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 4px;
    padding: 5px 9px;

    input {
      width: 100%;
      height: 24px;
      font-size: 16px;
    }
    .icon-container {
      position: absolute;
      top: 5px;
      right: 9px;
      cursor: pointer;
    }
  }
`;
