import Icon from "@/components/materials/icon";
import Text from "@/components/materials/text";
import styled from "styled-components";
import NotificationPopIn from "./pop-in";
import { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { selectNotification } from "@/redux/selectors";
import { Notifications } from "@mui/icons-material";

export default function Notification() {
  const [isHover, setIsHover] = useState<boolean>(false);
  const { data } = useAppSelector(selectNotification);

  return (
    <StyledNotification
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      /* onClick={()=> setIsHover(!isHover)} */
      className={`${isHover ? "hover " : ""}profil`}
    >
      <div className="notif-container">
        <Icon Icon={Notifications} width={24} height={24} />
        {data.length !== 0 && (
          <div className="number-notif">
            <Text>{data.length}</Text>
          </div>
        )}
      </div>
      <NotificationPopIn />
    </StyledNotification>
  );
}

const StyledNotification = styled.div`
  .notif-container {
    position: relative;
    .icon {
      color: ${({ theme }) => theme.gray};
    }
    cursor: pointer;
  }

  &.hover {
    .pop-in {
      visibility: visible;
      opacity: 1;
    }
  }

  .number-notif {
    position: absolute;
    top: 0;
    right: 0;
    width: 18px;
    height: 18px;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.primary};
    transform: translate(25%, -15%);
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 11px;
      color: ${({ theme }) => theme.white};
    }
  }
`;
