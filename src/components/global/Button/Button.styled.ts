import { theme } from "theme/theme";
import styled from "styled-components";

export const ButtonBox = styled.button<any>`
  width: ${(p) => (p.w ? p.w : "100%")};
  height: ${(p) => (p.h ? p.h : "48px")};

  border: none;
  outline: none;

  border-radius: ${(p) => p.theme.radii.authForm};

  font-family: ${(p) => p.theme.fonts.roboto};
  font-weight: 700;
  line-height: ${(p) => p.theme.lineHeights.body};

  background-color: ${(p) => (p.bg ? p.bg : p.theme.colors.v)};
  color: ${(p) => (p.color ? p.color : p.theme.colors.w)};

  transition: var(--hover-e-bg), var(--hover-e-color);

  &:hover,
  &:focus {
    background-color: ${(p) =>
      p.hoverBg ? p.hoverBg : p.theme.colors.buttonHover};
    ${(p) => (p.hoverC ? `color: ${p.hoverC}` : "")}
  }
`;
