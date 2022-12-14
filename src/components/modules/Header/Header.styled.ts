import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { HiPlus } from "react-icons/hi";

export const HeaderBox = styled.header`
  padding: 0 15px;
  background-color: ${(p) => p.theme.colors.bg};
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 68px;
  font-size: ${(p) => p.theme.fontSizes.m20};
`;

export const LinkLogo = styled(Link)`
  margin-right: 40px;
`;

export const Nav = styled.nav`
  margin-left: 134px;
`;

export const Plus = styled(HiPlus)`
  margin-left: 12px;
`;
