import styled from "styled-components";
import { Link } from "react-router-dom";

export const ArrowLink = styled(Link)`
  position: absolute;
  top: 81px;
  left: 78px;

  transform: translateY(-50%);

  width: 24px;
  height: 24px;

  color: ${(p) => p.theme.colors.border};

  transition: var(--hover-e-color);

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.v};
  }
`;
