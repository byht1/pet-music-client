import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonLinkBox = styled(Link)<any>`
  ${(p) => p.ml && `margin-left: ${p.ml}px;`}

  display: flex;
  align-items: center;

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
