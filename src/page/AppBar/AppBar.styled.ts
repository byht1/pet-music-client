import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  background-color: white;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: ${(p) => p.theme.space[4]}px;
  font-size: ${(p) => p.theme.fontSizes.m20};
`;

export const NLink = styled(NavLink)`
  &.active {
    color: red;
  }
`;
