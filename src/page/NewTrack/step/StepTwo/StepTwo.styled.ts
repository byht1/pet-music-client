import { BoxForm } from "page/NewTrack/NewTrack.styled";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const FormZone = styled(BoxForm)`
  padding-top: 36px;
`;

export const List = styled.ul`
  display: flex;
  gap: 125px;
`;

export const NLink = styled(NavLink)`
  font-family: ${(p) => p.theme.fonts.roboto};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: ${(p) => p.theme.fontSizes.normalMax};
  line-height: ${(p) => p.theme.lineHeights.normal};

  color: ${(p) => p.theme.colors.border};

  transition: var(--hover-e-color);

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.w};
  }

  &.active {
    color: ${(p) => p.theme.colors.w};

    &::after {
      content: "";
      margin-top: 12px;
      display: block;
      width: 100%;
      height: 2px;

      background-color: ${(p) => p.theme.colors.v};
    }
  }
`;
