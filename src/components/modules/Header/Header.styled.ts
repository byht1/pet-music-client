import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

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

export const NLink = styled(NavLink)<any>`
  position: relative;

  font-family: ${(p) => p.theme.fonts.roboto};
  font-weight: 700;
  font-size: ${(p) => p.theme.fontSizes.normal};
  line-height: ${(p) => p.theme.lineHeights.body};

  color: ${(p) => p.theme.colors.border};

  &.active {
    color: ${(p) => p.theme.colors.w};
  }

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.v};
  }
`;

export const Current = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  width: 56px;
  height: 2px;
  background: var(--violet);
`;

export const LinkLogo = styled(Link)`
  margin-right: 40px;
`;

export const Nav = styled.nav`
  margin-left: 134px;
`;
