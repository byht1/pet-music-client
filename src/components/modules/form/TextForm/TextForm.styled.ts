import styled from "styled-components";

export const Text = styled.p`
  font-family: ${(p) => p.theme.fonts.roboto};
  line-height: ${(p) => p.theme.lineHeights.body};
  text-align: center;

  color: ${(p) => p.theme.colors.w};
`;
