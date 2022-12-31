import styled from "styled-components";

export const ResButton = styled.button`
  font-family: ${(p) => p.theme.fonts.roboto};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.normal};
  line-height: ${(p) => p.theme.lineHeights.body};

  background-color: transparent;
  color: ${(p) => p.theme.colors.border};
`;
