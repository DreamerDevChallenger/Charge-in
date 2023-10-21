import Text from "@/components/materials/text";
import Image from "next/legacy/image";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { NavItemProp } from "..";
import Link from "next/link";

export default function NavItem({ children, icon, path }: NavItemProp) {
  const pathname = usePathname();

  return (
    <StyledNavItem
      href={path}
      className={`${pathname === path ? "current" : ""}`}
    >
      <Image src={icon.src} alt="" width={20} height={20} />
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
`;
