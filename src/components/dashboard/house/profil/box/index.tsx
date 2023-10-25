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
      <Image src={img} alt="" width={150} height={150} />
      <div></div>
    </StyledDashboardProfilBox>
  );
}

const StyledDashboardProfilBox = styled.div`
  padding: 32px;
  border-radius: 16px;
  border: 1px solid #dce6e5;
  display: flex;
`;
