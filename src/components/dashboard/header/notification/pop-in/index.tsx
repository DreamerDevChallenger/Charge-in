import styled from "styled-components";

import Text from "@/components/materials/text";

import Button from "@/components/materials/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clear } from "@/redux/reducers/notfication";
import { ProfilAvatar } from "@/components/materials/profil";
import { selectNotification } from "@/redux/selectors";
import { Delete } from "@mui/icons-material";

export default function NotificationPopIn() {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector(selectNotification);

  return (
    <StyledNotificationPopIn className="pop-in">
      <h3 className="title">Notification</h3>
      <div className="pop-in-wrapper">
        {data.length !== 0 ? (
          data.slice(0, 4).map((item, index) => (
            <div className="pop-in-container" key={index}>
              <ProfilAvatar width={36} height={36} />
              <div className="pop-in-content">
                <Text>
                  <strong>
                    {item.first_name} {item.last_name}
                  </strong>{" "}
                  a ajouté un installateur
                </Text>
                <Text className="day">Il y a 3 jours </Text>
              </div>
            </div>
          ))
        ) : (
          <div className="pop-in-container">
            <Text>Aucune notification</Text>
          </div>
        )}
      </div>
      <div className="pop-in-footer">
        <Text className="number-notifaction">
          {data.length} notification{data.length > 1 && "s"}
        </Text>
        <Button onClick={() => dispatch(clear())} icon={Delete}>
          <Text>Tout effacer</Text>
        </Button>
      </div>
    </StyledNotificationPopIn>
  );
}

const StyledNotificationPopIn = styled.div`
  max-width: 400px;

  .pop-in-item {
    border-bottom: 1px solid ${({ theme }) => theme.gray_third};
    padding: 20px 24px;
  }

  .pop-in-wrapper {
    padding: 24px;
  }

  .pop-in-container {
    opacity: 0.5;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px 0;
    border-bottom: 1px solid ${({ theme }) => theme.gray_third};

    &:nth-child(1) {
      opacity: 1;
    }

    .pop-in-content {
      display: flex;
      flex-direction: column;
      .day {
        color: ${({ theme }) => theme.gray_second};
      }
    }
  }
`;
