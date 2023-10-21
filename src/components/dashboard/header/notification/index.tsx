import Text from "@/components/materials/text";
import { NotificationsIcon } from "@/utils/icon";
import styled from "styled-components";

export default function Notification() {
  return (
    <StyledNotification>
      <NotificationsIcon />
      <div className="number-notif">
        <Text>4</Text>
      </div>
    </StyledNotification>
  );
}

const StyledNotification = styled.div`
  position: relative;

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
