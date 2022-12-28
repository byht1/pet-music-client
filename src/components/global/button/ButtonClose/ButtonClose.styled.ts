import styled from "styled-components";

export const ButtonBox = styled.button<any>`
  ${(p) => p.mt && `margin-top: ${p.mt}px;`}
  ${(p) => p.mb && `margin-bottom: ${p.mb}px;`}
  ${(p) => p.mr && `margin-right: ${p.mr}px;`}
  ${(p) => p.ml && `margin-left: ${p.ml}px;`}

  border: none;
  outline: none;

  display: ${(p) => (p.display ? p.display : "inline-block")};

  background-color: transparent;

  /* background-color: ${(p) => (p.bg ? p.bg : p.theme.colors.v)};
  color: ${(p) => (p.color ? p.color : p.theme.colors.w)};

  transition: var(--hover-e-bg), var(--hover-e-color);

  &:hover,
  &:focus {
    background-color: ${(p) =>
    p.hoverBg ? p.hoverBg : p.theme.colors.buttonHover};
    ${(p) => (p.hoverC ? `color: ${p.hoverC}` : "")}
  } */
`;
