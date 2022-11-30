import styled from "styled-components";
import { Link } from "react-router-dom";

export const ArrowLink = styled(Link)`
  position: absolute;
  top: 86px;
  left: 78px;

  width: 24px;
  height: 24px;

  color: ${(p) => p.theme.colors.border};

  transition: var(--hover-e-color);

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.v};
  }
`;
