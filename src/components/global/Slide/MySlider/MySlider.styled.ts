import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkShowAll = styled(Link)`
  font-family: ${(p) => p.theme.fonts.roboto};
  font-weight: 700;
  font-size: ${(p) => p.theme.fontSizes.normal};
  line-height: ${(p) => p.theme.lineHeights.body};

  color: ${(p) => p.theme.colors.border};
`;
