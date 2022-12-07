import styled from "styled-components";

export const Button = styled.button`
  transform: scale(1);

  color: ${(p) => p.theme.colors.w};
  background-color: transparent;

  transition: transform 250ms linear;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;
