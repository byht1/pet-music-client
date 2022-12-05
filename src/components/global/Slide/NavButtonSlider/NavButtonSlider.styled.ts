import styled from "styled-components";

export const ButtonSwiperArrow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  padding: 4px;

  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 50%;

  background-color: transparent;
  color: ${(p) => p.theme.colors.border};

  translate: background-color 250ms line, border-color 250ms line,
    color 250ms line;
  &:last-child {
    margin-left: 12px;
  }

  &:hover,
  &:focus {
    background-color: #37383a;
  }

  &:disabled {
    background-color: transparent;
    border-color: ${(p) => p.theme.colors.g};
    color: ${(p) => p.theme.colors.g};
  }
`;
