import Text from "@/components/materials/text";
import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

export default function DashboardProfilBox({
  img,
  className,
  data,
}: {
  img: StaticImageData;
  className?: string;
  data: Array<string>;
}) {
  return (
    <StyledDashboardProfilBox
      className={`${className ? `${className} ` : ""}card-box`}
    >
      <div className="box-container">
        <Image
          src={img}
          alt="image charging or installer"
          width={150}
          height={150}
        />
      </div>
      <div className="box-container">
        <ul>
          {data.map((item, index) => (
            <li key={index} className="card-list-item">
              <Text className="label">{item}</Text>
            </li>
          ))}
        </ul>
      </div>
      <div className="box-container box-price">
        <span>2200.00€</span>
      </div>
    </StyledDashboardProfilBox>
  );
}

const StyledDashboardProfilBox = styled.div`
  padding: 32px 16px;
  border-radius: 16px;
  border: 1px solid #dce6e5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 60px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 150px;
  }

  .box-container {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }

  .box-price {
    color: ${({ theme }) => theme.secondary};
    font-size: 30px;
    font-weight: 600;
  }

  &.current {
    border: 1px solid ${({ theme }) => theme.primary};
    background: rgba(54, 156, 150, 0.05);
    box-shadow: 0px 4px 16px 0px rgba(164, 211, 208, 0.8);
  }

  @media (min-width: 500px) {
    flex-direction: row;

    .box-price {
      font-size: 48px;
    }
  }
`;
