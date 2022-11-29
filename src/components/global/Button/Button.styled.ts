import styled from "styled-components";

export const ButtonBox = styled.button<any>`
  width: ${(p) => (p.w ? p.w : "100%")};
  height: ${(p) => (p.h ? p.h : "48px")};

  border-radius: ${(p) => p.theme.radii.authForm};

  font-family: ${(p) => p.theme.fonts.roboto};
  font-weight: 700;
  line-height: ${(p) => p.theme.lineHeights.body};

  background-color: ${(p) => (p.bg ? `var(${p.bg})` : "var(--violet)")};
  color: ${(p) => (p.color ? `var(${p.color})` : "var(--withe)")};
`;
