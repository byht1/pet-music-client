import styled from "styled-components";

export const H2 = styled.h2`
  font-family: ${(p) => p.theme.fonts.roboto};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: ${(p) => p.theme.fontSizes.normalMax};
  line-height: ${(p) => p.theme.lineHeights.normal};
`;
