import Text from "@/components/materials/text";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { NavItemProp } from "..";
import Link from "next/link";
import Icon from "@/components/materials/icon";
/* import { useAppDispatch } from "@/redux/hooks";
import { toggleNavbar } from "@/redux/reducers/toggle-navbar"; */

export default function NavItem({
  children,
  icon_off,
  icon_on,
  path,
}: NavItemProp) {
  const pathname = usePathname();
  /* const dispatch = useAppDispatch(); */
  const url = `/dashboard/#`;

  return (
    <StyledNavItem
      href={url}
      className={`${pathname === path ? "current" : ""}`}
      /*  onClick={() => dispatch(toggleNavbar())} */
    >
      <Icon
        Icon={pathname === path ? icon_on : icon_off}
        width={20}
        height={20}
      />
      <Text>{children}</Text>
    </StyledNavItem>
  );
}

export const StyledNavItem = styled(Link)`
  display: flex;
  color: ${({ theme }) => theme.white};
  padding: 12px;
  gap: 12px;
  border-radius: 8px;

  &.current {
    background-color: rgba(0, 0, 0, 0.3);
  }

  .text {
    overflow: hidden;
    font-size: 15px;
  }
`;
