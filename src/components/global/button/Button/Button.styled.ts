import styled from "styled-components";

export const ButtonBox = styled.button<any>`
  ${(p) => p.mt && `margin-top: ${p.mt}px`};
  ${(p) => p.mb && `margin-bottom: ${p.mb}px`};
  ${(p) => p.mr && `margin-right: ${p.mr}px`};
  ${(p) => p.ml && `margin-left: ${p.ml}px`};

  width: ${(p) => (p.w ? p.w : "100%")};
  ${(p) => p.padding && `padding: 12px 36px`};

  border: none;
  outline: none;

  border-radius: ${(p) => p.theme.radii.authForm};

  font-family: ${(p) => p.theme.fonts.roboto};
  font-size: 16px;
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
