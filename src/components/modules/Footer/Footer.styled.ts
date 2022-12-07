import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterBox = styled.footer`
  padding: 42px 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 68px;

  background-color: ${(p) => p.theme.colors.bs};
`;

export const FooterLink = styled(Link)`
  font-family: ${(p) => p.theme.fonts.roboto};
  font-weight: 700;
  font-size: ${(p) => p.theme.fontSizes.normal};
  line-height: ${(p) => p.theme.lineHeights.body};

  color: ${(p) => p.theme.colors.border};

  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.v};
  }
`;
