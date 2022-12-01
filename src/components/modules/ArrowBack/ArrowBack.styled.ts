import styled from "styled-components";

export const ArrowButton = styled.button`
  position: absolute;
  top: 86px;
  left: 78px;

  outline: none;
  border: none;

  width: 24px;
  height: 24px;

  background-color: transparent;
  color: ${(p) => p.theme.colors.border};

  transition: var(--hover-e-color);

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.v};
  }
`;
