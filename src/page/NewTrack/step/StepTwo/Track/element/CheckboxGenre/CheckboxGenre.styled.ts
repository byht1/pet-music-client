import styled from "styled-components";

export const Label = styled.label<any>`
  display: block;

  padding: 8px 24px;

  width: 100%;

  cursor: pointer;

  ${(p) => p.check && `background-color: ${p.theme.colors.bgs};`};

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.bgs};
  }
`;

export const TextSpan = styled.span`
  display: block;

  font-family: ${(p) => p.theme.fonts.roboto};
  font-size: ${(p) => p.theme.fontSizes.normal};
  line-height: ${(p) => p.theme.lineHeights.body};

  color: ${(p) => p.theme.colors.bs};
`;

export const Input = styled.input`
  display: none;
`;
