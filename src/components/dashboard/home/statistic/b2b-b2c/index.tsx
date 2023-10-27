import Text from "@/components/materials/text";
import styled from "styled-components";

export default function DashboardStatisticB2BB2C({
  B2C,
  B2B,
}: {
  B2C: string | "##";
  B2B: string | "##";
}) {
  return (
    <StyledB2BB2C>
      <div className="b2c">
        <Text>B2C</Text>
        <Text className="price">
          {B2C} {B2C !== "##" && "€ HT"}
        </Text>
      </div>
      <div className="b2b">
        <Text>B2B</Text>
        <Text className="price">
          {B2B} {B2B !== "##" && "€ HT"}
        </Text>
      </div>
    </StyledB2BB2C>
  );
}

const StyledB2BB2C = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 48px;
  flex-wrap: wrap;
  gap: 8px;

  div {
    display: flex;
    flex-direction: column;
    gap: 1px;
    .price {
      color: ${({ theme }) => theme.background_secondary};
    }
  }
`;
