import styled from "styled-components";
import { NavItemProp } from "..";
import Text from "@/components/materials/text";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/materials/icon";

export default function NavDropdown({
  children,
  icon_off,
  icon_on,
  path,
}: NavItemProp) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();
  const url = `/dashboard${path}`;
  const urlInProgress = `${url}/in-progress`;
  const urlArchived = `${url}/archived`;

  return (
    <StyledNavDropdown
      className={`${
        isOpen || pathname.includes(urlInProgress || urlArchived)
          ? "open"
          : "close"
      }`}
    >
      <div className="nav-link" onClick={() => setIsOpen(!isOpen)}>
        <Icon
          Icon={pathname.includes(path) ? icon_on : icon_off}
          width={20}
          height={20}
        />
        <Text>{children}</Text>
        <div className={`toggle-dropdown`}>
          <div className="lign"></div>
          <div className="lign"></div>
        </div>
      </div>
      <div className="dropdown-list">
        <Link
          href={urlInProgress}
          className={pathname.includes(urlInProgress) ? "active" : "inactive"}
        >
          En cours
        </Link>
        <Link
          href={urlArchived}
          className={pathname.includes(urlArchived) ? "active" : "inactive"}
        >
          Archivés
        </Link>
      </div>
    </StyledNavDropdown>
  );
}

const StyledNavDropdown = styled.div`
  display: flex;
  color: ${({ theme }) => theme.white};
  flex-direction: column;
  font-size: 15px;
  cursor: pointer;

  .nav-link,
  .dropdown-list {
    display: flex;
    gap: 12px;
  }

  .nav-link {
    border-radius: 8px 8px 0 0;
    align-items: center;
    padding: 12px;
  }

  .dropdown-list {
    background-color: rgba(0, 0, 0, 0.1);
    flex-direction: column;
    padding: 12px 16px;
    border-radius: 0 0 8px 8px;
    color: ${({ theme }) => theme.text_secondary};
    transition: 0.3s;
    transform-origin: top;
    .active {
      color: ${({ theme }) => theme.primary};
    }
  }

  .toggle-dropdown {
    position: relative;
    width: 20px;
    height: 20px;

    .lign {
      position: absolute;
      top: 10px;
      transform: translateY(-50%);
      background-color: ${({ theme }) => theme.white};
      height: 2px;
      width: 100%;
      border-radius: 1px;
      transition: transform 0.3s ease;
      &:nth-child(1) {
        transform: translateY(-50%) rotateZ(90deg);
      }
    }
  }

  &.open {
    .nav-link {
      background-color: rgba(0, 0, 0, 0.3);
    }
    .dropdown-list {
      transform: scaleY(1);
    }
    .toggle-dropdown {
      .lign {
        &:nth-child(1) {
          transform: translateY(-50%) rotateZ(0deg);
        }
      }
    }
  }

  &.close {
    .dropdown-list {
      display: none;
    }
  }

  .text {
    flex: 1;
  }
`;
