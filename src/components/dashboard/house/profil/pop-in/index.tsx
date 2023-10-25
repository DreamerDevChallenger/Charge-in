import ButtonProfil from "@/components/materials/button-profil";
import Icon from "@/components/materials/icon";
import Text from "@/components/materials/text";
import { useAppDispatch } from "@/redux/hooks";
import { toggleOverlay } from "@/redux/reducers/overlay";
import { dataAccessory } from "../accessories/data";
import styled from "styled-components";
import DashboardProfilPopInAccessory from "./accessory";
import { StaticImageData } from "next/image";
import DashboardProfilBox from "../box";
import chargin from "@/assets/charging.png";
import { dataBoxCharging } from "../box/data";
import { SyncAlt } from "@mui/icons-material";

export default function DashboardProfilPopIn({
  title,
  description,
  accessory,
  img,
  dataBox,
  setState,
  name,
}: {
  title: string;
  name?: string;
  description?: string;
  accessory?: boolean;
  img?: StaticImageData;
  dataBox?: Array<string>;
  setState: (e: boolean) => void;
}) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleOverlay());
    setState(false);
  };

  return (
    <StyledDashboardProfilPopIn>
      <div className="pop-in-card">
        <div className="pop-btn-container">
          <button className="close" onClick={handleClick}>
            <div className="lign"></div>
            <div className="lign"></div>
          </button>
        </div>
        <div className="pop-in-content">
          <div className="pop-container">
            <h2>
              <Icon Icon={SyncAlt} width={30} height={30} stroke="primary" />
              <span>Changer {title}</span>
            </h2>
          </div>

          {description && (
            <div className="pop-container">
              <Text>{description}</Text>
            </div>
          )}

          <div className="pop-container">
            {accessory ? (
              <div className="pop-accessory">
                {dataAccessory.map((item, index) => (
                  <DashboardProfilPopInAccessory key={index} />
                ))}
              </div>
            ) : (
              <div className="pop-box">
                <h3 className="current">{name} actuelle</h3>
                <DashboardProfilBox
                  img={img ? img : chargin}
                  data={dataBox ? dataBox : dataBoxCharging}
                  className="current"
                />
                <div className="pop-wrapper">
                  <h3 className="other">
                    Autres {name?.toLowerCase()}s proposées
                  </h3>

                  <DashboardProfilBox
                    img={img ? img : chargin}
                    data={dataBox ? dataBox : dataBoxCharging}
                  />
                  <DashboardProfilBox
                    img={img ? img : chargin}
                    data={dataBox ? dataBox : dataBoxCharging}
                  />
                  <DashboardProfilBox
                    img={img ? img : chargin}
                    data={dataBox ? dataBox : dataBoxCharging}
                  />
                </div>
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

  h3 {
    &.current {
      color: ${({ theme }) => theme.primary};
    }
    &.other {
      margin-top: 30px;
    }
  }

  .close {
    position: relative;
    width: 20px;
    height: 20px;
    .lign {
      background: black;
      position: absolute;
      width: 100%;
      height: 2px;
      border-radius: 10px;

      &:nth-child(1) {
        top: 10px;
        transform: rotateZ(45deg);
      }
      &:nth-child(2) {
        top: 10px;
        transform: rotateZ(-45deg);
      }
    }
  }

  .pop-box {
    display: flex;
    flex-direction: column;
    gap: 24px;
    .pop-wrapper {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  }

  .pop-in-card {
    overflow: auto;
    border-radius: 8px;
    box-shadow: 0px 12px 24px 0px rgba(112, 112, 112, 0.25);
    max-width: 1000px;
    max-height: 100%;
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
