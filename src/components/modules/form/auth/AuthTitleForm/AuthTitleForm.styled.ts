import { GoogleLogin } from "@leecheuk/react-google-login";
import styled from "styled-components";

export const Title = styled.h2`
  font-family: ${(p) => p.theme.fonts.roboto};
  font-size: ${(p) => p.theme.fontSizes.normalMax};
  line-height: ${(p) => p.theme.lineHeights.normal};
  text-align: center;
`;

export const ListAuth = styled.ul`
  display: flex;
  gap: 24px;

  margin: 0 auto;
`;
