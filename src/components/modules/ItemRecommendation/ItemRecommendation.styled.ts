import styled from "styled-components";

export const Poster = styled.img`
  width: 196px;
  height: 196px;

  border-radius: ${(p) => p.theme.radii.inputAuthForm};
`;

export const GroupTitle = styled.p`
  margin-top: 8px;
  font-family: ${(p) => p.theme.fonts.roboto};
  font-weight: 700;
  font-size: ${(p) => p.theme.fontSizes.normal};
  line-height: ${(p) => p.theme.lineHeights.body};
`;

export const NameTrack = styled.p`
  font-family: ${(p) => p.theme.fonts.roboto};
  font-size: ${(p) => p.theme.fontSizes.normal};
  line-height: ${(p) => p.theme.lineHeights.body};
`;
