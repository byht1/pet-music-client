import styled from "styled-components";

export const Title = styled.p`
  font-family: ${(p) => p.theme.fonts.roboto};
  font-weight: 700;
  line-height: ${(p) => p.theme.lineHeights.body};
`;

export const ListRequirements = styled.ul`
  margin-top: 12px;
  margin-left: 25px;

  list-style-type: disc;
`;
