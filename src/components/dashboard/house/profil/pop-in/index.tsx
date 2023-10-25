import ButtonProfil from "@/components/materials/button-profil";
import Icon from "@/components/materials/icon";
import Text from "@/components/materials/text";
import { useAppDispatch } from "@/redux/hooks";
import { toggleOverlay } from "@/redux/reducers/overlay";
import { SyncIcon } from "@/utils/icon";
import { dataAccessory } from "../accessories/data";
import styled from "styled-components";
import DashboardProfilPopInAccessory from "./accessory";

export default function DashboardProfilPopIn({
  title,
  description,
  accessory,
}: {
  title: string;
  description?: string;
  accessory?: boolean;
}) {
  const dispatch = useAppDispatch();

  return (
    <StyledDashboardProfilPopIn>
      <div className="pop-in-card">
        <div className="pop-btn-container">
          <button className="close" onClick={() => dispatch(toggleOverlay())}>
            X
          </button>
        </div>
        <div className="pop-in-content">
          <div className="pop-container">
            <h2>
              <Icon Icon={SyncIcon} width={30} height={30} stroke="primary" />
              <span>Changer {title}</span>
            </h2>
          </div>

          {description && (
            <div className="pop-container">
              <Text>{description}</Text>
            </div>
          )}

          <div className="pop-container">
            {accessory && (
              <div className="pop-accessory">
                {dataAccessory.map((item, index) => (
                  <DashboardProfilPopInAccessory key={index} />
                ))}
              </div>
            )}
          </div>
          <div className="pop-container">
            <ButtonProfil onClick={() => {}}>Enregistrer {title}</ButtonProfil>
          </div>
        </div>
      </div>
    </StyledDashboardProfilPopIn>
  );
}

const StyledDashboardProfilPopIn = styled.div`
  z-index: 15;
  position: fixed;
  top: 0%;
  left: 0%;
  padding: 16px 24px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .pop-in-card {
    overflow: auto;
    border-radius: 8px;
    box-shadow: 0px 12px 24px 0px rgba(112, 112, 112, 0.25);
    max-width: 1000px;
    height: 100%;
    width: 100%;
    padding: 16px 10px;
    display: flex;
    flex-direction: column;
    background: white;

    h2 {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .pop-btn-container {
      display: flex;
      justify-content: flex-end;
      button {
        cursor: pointer;
      }
    }

    .pop-in-content {
      padding: 0 12px 16px;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    .pop-accessory {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 24px;
    }
  }
`;
