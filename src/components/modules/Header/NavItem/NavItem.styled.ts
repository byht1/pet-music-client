import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NLink = styled(NavLink)<any>`
  position: relative;

  font-family: ${(p) => p.theme.fonts.roboto};
  font-weight: 700;
  font-size: ${(p) => p.theme.fontSizes.normal};
  line-height: ${(p) => p.theme.lineHeights.body};

  color: ${(p) => p.theme.colors.border};

  transition: color 250ms linear;

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
  bottom: -8px;
  left: 0;
  right: 0;
  width: 56px;
  height: 2px;
  background: var(--violet);
`;
