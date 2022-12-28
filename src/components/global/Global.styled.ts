import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkTo = styled(Link)`
  font-weight: 700;

  color: ${(p) => p.theme.colors.w};

  transition: var(--hover-e-color);

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.v};
  }
`;
