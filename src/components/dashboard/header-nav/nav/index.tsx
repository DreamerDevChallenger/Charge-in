import styled from "styled-components";

import { dataNav } from "./data";
import NavItem from "./nav-item";
import { chivo } from "@/utils/font";
import Text from "@/components/materials/text";
import NavDropdown from "./nav-dropdown";
import { Window } from "@mui/icons-material";

export interface NavItemProp {
  children: React.ReactNode;
  icon: any;
  path: string;
}

export default function DashboardNav() {
  return (
    <StyledDashboardNav className={chivo.className}>
      <ul>
        <li className="nav-item">
          <NavItem icon={Window} path="/dashboard">
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
                  <NavDropdown icon={item.icon_off} path={item.path}>
                    {item.title}
                  </NavDropdown>
                ) : (
                  <NavItem icon={item.icon_off} path={item.path}>
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
      color: #6a93ac;
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
