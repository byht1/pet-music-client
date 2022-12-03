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

export const ButtonLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 98px;
  padding: 12px 24px;
  border: 2px solid ${(p) => p.theme.colors.v};
  border-radius: ${(p) => p.theme.radii.inputAuthForm};

  font-family: ${(p) => p.theme.fonts.roboto};
  font-size: ${(p) => p.theme.fontSizes.normal};
  line-height: ${(p) => p.theme.lineHeights.body};

  color: ${(p) => p.theme.colors.border};

  transition: color 250ms linear, border 250ms linear;

  &:hover,
  &:focus {
    /* border: 2px solid #8e60db; */
    color: ${(p) => p.theme.colors.w};
  }
`;

export const Plus = styled(HiPlus)`
  margin-left: 12px;
`;
