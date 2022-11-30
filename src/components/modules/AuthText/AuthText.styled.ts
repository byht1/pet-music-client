import styled from "styled-components";
import { Link } from "react-router-dom";

export const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  font-family: ${(p) => p.theme.fonts.roboto};
  font-weight: 700;
  line-height: ${(p) => p.theme.lineHeights.body};
  text-align: center;

  color: ${(p) => p.theme.colors.border};
`;

export const TextDecorate = styled(Link)`
  color: ${(p) => p.theme.colors.w};

  transition: var(--hover-e-color);

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.v};
  }
`;
