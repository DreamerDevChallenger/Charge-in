import styled from "styled-components";
import { dataTable } from "./data";
import Text from "@/components/materials/text";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropUser } from "@/redux/reducers/users";
import Icon from "@/components/materials/icon";
import { Delete, Edit, MoreVert } from "@mui/icons-material";

export default function TableContainer({
  currentData,
}: {
  currentData: PropUser[];
}) {
  const pathname = usePathname();

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
        {currentData.length ? (
          currentData.map((item, index) => (
            <tr key={index} className="table-row">
              {dataTable.map((title, index) => (
                <td key={index} className={`table-item`}>
                  {title === "Nom" && (
                    <Link
                      aria-label={`Link to ${item.first_name} ${item.last_name} profil`}
                      href={`${pathname}/profil/${item.id}`}
                    >
                      <Text>
                        {item.first_name.slice(0, 1)}.{item.last_name}
                      </Text>
                    </Link>
                  )}

                  {title === "Borne choisie" && (
                    <Text>Borne Modèle {item.charging}</Text>
                  )}
                  {title === "Devis" && <Text>###</Text>}
                  {title === "Étape" && (
                    <Text
                      className={`
                        step ${
                          item.step === 1
                            ? "first"
                            : item.step === 2
                            ? "second"
                            : item.step === 3
                            ? "third"
                            : item.step === 4 && "fourth"
                        }`}
                    >
                      Étape {item.step}
                    </Text>
                  )}
                  {title === "Actions" && (
                    <div className="action">
                      <Link
                        href={`${pathname}/profil/${item.id}`}
                        aria-label={`Link to ${item.first_name} ${item.last_name} profil`}
                      >
                        <Icon Icon={Edit} width={16} height={16} />
                      </Link>
                      <Icon Icon={Delete} width={16} height={16} />
                      <Icon Icon={MoreVert} width={16} height={16} />
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr className="table-row">
            <td className="table-item">Profil introuvable</td>
          </tr>
        )}
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
        color: ${({ theme }) => theme.yellow};
        background: rgba(232, 176, 92, 0.1);
      }

      &.third {
        color: ${({ theme }) => theme.purple};
        background: rgba(158, 121, 236, 0.1);
      }

      &.fourth {
        color: ${({ theme }) => theme.red};
        background: rgba(240, 116, 161, 0.1);
      }
    }

    .action {
      display: flex;
      gap: 4px;
      color: ${({ theme }) => theme.secondary};
    }
  }

  .table-header {
    .table-item {
      font-size: 13px;
      color: ${({ theme }) => theme.gray_second};
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
