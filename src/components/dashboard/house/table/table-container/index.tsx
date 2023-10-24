import styled from "styled-components";
import { dataTable } from "./data";
import Text from "@/components/materials/text";
/* import { selectUser } from "@/redux/selectors";
import { useAppSelector } from "@/redux/hooks"; */

export default function TableContainer({
  currentData,
}: {
  currentData: {
    id: number;
    first_name: string;
    last_name: string;
    charging: number;
    step: number;
  }[];
}) {
  return (
    <StyledTableContainer>
      <thead className="table-header">
        <tr>
          {dataTable.map((item, index) => (
            <th key={index} className="table-item">
              <Text>{item}</Text>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {currentData.map((item, index) => (
          <tr key={index} className="table-row">
            {dataTable.map((title, index) => (
              <td key={index} className={`table-item`}>
                <Text
                  className={`${
                    title === "Étape" &&
                    `step ${
                      item.step === 1
                        ? "first"
                        : item.step === 2
                        ? "second"
                        : item.step === 3
                        ? "third"
                        : item.step === 4 && "fourth"
                    }`
                  }`}
                >
                  {title === "Nom" &&
                    `${item.first_name.slice(0, 1)}.${item.last_name}`}
                  {title === "Borne choisie" && `Borne Modèle ${item.charging}`}
                  {title === "Devis" && `###`}
                  {title === "Étape" && `Étape ${item.step}`}
                </Text>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTableContainer>
  );
}

const StyledTableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;

  .table-item {
    padding: 16px 100px 16px 24px;
    white-space: nowrap;
    border-bottom: 2px solid #fafafa;
    .step {
      padding: 2px 8px;
      border-radius: 4px;

      &.first {
        color: ${({ theme }) => theme.primary};
        background: rgba(54, 156, 150, 0.1);
      }

      &.second {
        color: #e8b05c;
        background: rgba(232, 176, 92, 0.1);
      }

      &.third {
        color: #9e79ec;
        background: rgba(158, 121, 236, 0.1);
      }

      &.fourth {
        color: #f074a1;
        background: rgba(240, 116, 161, 0.1);
      }
    }
  }

  .table-header {
    overflow: auto;

    .table-item {
      font-size: 13px;
      color: #8fa2a2;
      white-space: nowrap;
      font-weight: 400;
      text-align: start;
      text-transform: uppercase;
    }
  }

  .table-row {
    &:nth-child(even) {
      background-color: #fafafa;
    }
  }
`;
