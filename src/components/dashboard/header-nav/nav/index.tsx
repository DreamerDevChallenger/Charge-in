import styled from "styled-components";

import { dataNav } from "./data";
import NavItem from "./nav-item";
import { chivo } from "@/utils/font";
import Text from "@/components/materials/text";
import NavDropdown from "./nav-dropdown";
import { Window, WindowOutlined } from "@mui/icons-material";
import { usePathname } from "next/navigation";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

export interface NavItemProp {
  children: React.ReactNode;
  icon_off: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  icon_on: OverridableComponent<SvgIconTypeMap<{}, "svg">>;

  path: string;
}

export default function DashboardNav() {
  const url = "/dashboard";
  return (
    <StyledDashboardNav className={chivo.className}>
      <ul>
        <li className="nav-item">
          <NavItem icon_off={WindowOutlined} icon_on={Window} path={url}>
            Accueil
          </NavItem>
        </li>
      </ul>
      {dataNav.map((list, index) => (
        <div key={index} className="nav-items-container">
          <h3 className="nav-list-title">
            <Text>{list.title}</Text>
          </h3>
          <ul className="nav-list">
            {list.items.map((item, i) => (
              <li className="nav-item" key={i}>
                {item.dropdown ? (
                  <NavDropdown
                    icon_off={item.icon_off}
                    icon_on={item.icon_on}
                    path={item.path}
                  >
                    {item.title}
                  </NavDropdown>
                ) : (
                  <NavItem
                    icon_off={item.icon_off}
                    icon_on={item.icon_on}
                    path={item.path}
                  >
                    {item.title}
                  </NavItem>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </StyledDashboardNav>
  );
}

const StyledDashboardNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .nav-items-container {
    display: flex;
    flex-direction: column;
    gap: 12px;

    .nav-list-title {
      color: ${({ theme }) => theme.text_secondary};
      font-weight: 400;
      text-transform: uppercase;
      font-size: 15px;
    }

    .nav-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }
`;
