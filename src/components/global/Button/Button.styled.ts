import styled from "styled-components";

export const ButtonBox = styled.button<any>`
  width: ${(p) => (p.w ? p.w : "100%")};
  height: ${(p) => (p.h ? p.h : "48px")};

  ${(p) => (p.bg ? `background-color: var(${p.bg});` : "")};
  ${(p) => (p.color ? `color: var(${p.color});` : "")};
`;
