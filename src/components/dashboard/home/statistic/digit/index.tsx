import Icon from "@/components/materials/icon";
import Text from "@/components/materials/text";
import {
  DragHandle,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import styled from "styled-components";

export default function DashboardStatisticDigit({
  number,
  price,
  income,
  value,
}: {
  number?: number;
  price?: number;
  income: "same" | boolean | string;
  value: number;
}) {
  return (
    <StyledDigit>
      <div className="number">
        <Text>{number ? number : `${price}€`}</Text>

        {price && <Text className="ht">HT</Text>}
      </div>
      <div
        className={`${
          income === "same"
            ? "same"
            : income
            ? "positive"
            : !income && "negative"
        } income`}
      >
        {income === "same" ? (
          <Icon Icon={DragHandle} width={24} height={24} />
        ) : income ? (
          <Icon Icon={KeyboardArrowUp} width={24} height={24} />
        ) : (
          !income && <Icon Icon={KeyboardArrowDown} width={24} height={24} />
        )}
        <Text>{value}%</Text>
      </div>
    </StyledDigit>
  );
}

const StyledDigit = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;

  .number {
    font-size: 28px;
    font-weight: 600;
    display: flex;
    gap: 10px;
    align-items: center;

    .ht {
      color: ${({ theme }) => theme.gray_second};
      font-size: 16px;
      font-weight: 400;
    }
  }

  .income {
    display: flex;
    align-items: center;
    font-size: 18px;

    &.positive {
      color: ${({ theme }) => theme.success};
    }
    &.same {
      color: ${({ theme }) => theme.gray_second};
    }

    &.negative {
      color: ${({ theme }) => theme.error};
    }
  }
`;
