import { chivo } from "@/utils/font";
import { useState } from "react";
import styled from "styled-components";

import { VisibilityOff, VisibilityOutlined } from "@mui/icons-material/";

interface FormControlProps {
  label: string;
  htmlFor: string;
  placeholder: string;
  type: "password" | "text";
  register: Function;
  errors: any;
  pattern: RegExp;
  message: string;
  name: string;
}

export default function FormControl({
  label,
  htmlFor,
  placeholder,
  type,
  register,
  errors,
  pattern,
  message,
  name,
}: FormControlProps) {
  const [show, setShow] = useState(false);

  const nameInput = `${htmlFor.replace(/^./, (str) => str.toUpperCase())}`;

  return (
    <StyledFormControl className={chivo.className}>
      <label htmlFor={htmlFor}>{label}</label>

      <div className={`${errors[htmlFor] ? "error " : ""}input-container`}>
        <>
          <input
            type={type === "password" ? (show ? "text" : "password") : type}
            id={htmlFor}
            className={`${chivo.className}`}
            placeholder={placeholder}
            autoComplete="current-password"
            {...register(htmlFor, {
              required: {
                value: true,
                message: `${name} est requis`,
              },
              pattern: {
                value: pattern,
                message: `${name} doit ressembler à : ${message}`,
              },
            })}
          />

          {type === "password" && (
            <div className="icon-container" onClick={() => setShow(!show)}>
              {show ? <VisibilityOff /> : <VisibilityOutlined />}
            </div>
          )}
        </>
      </div>
      {errors[htmlFor] && (
        <div className="error-message">{errors[htmlFor].message}</div>
      )}
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

  .error-message {
    color: ${({ theme }) => theme.error};
  }

  .input-container {
    position: relative;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 4px;
    padding: 5px 9px;

    &.error {
      box-shadow: 0px 0px 4px 0px ${({ theme }) => theme.error};
      border: 1px solid ${({ theme }) => theme.error};
    }

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
