import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

export const UserLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;

  font-family: ${(p) => p.theme.fonts.roboto};
  font-size: ${(p) => p.theme.fontSizes.normal};
  line-height: ${(p) => p.theme.lineHeights.body};

  color: ${(p) => p.theme.colors.w};

  transition: var(--hover-e-color);

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.va};
  }
`;

export const UserIcon = styled(FaUserAlt)`
  color: ${(p) => p.theme.colors.border};

  transition: var(--hover-e-color);

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.va};
  }
`;
