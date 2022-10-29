import styled from "styled-components";

export const Label = styled.label`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

export const NameInput = styled.span`
  display: block;
  margin-right: ${(p) => p.theme.space[4]}px;
`;

export const TextError = styled.span`
  position: absolute;
  top: 100%;

  width: ${(p) => p.theme.size.max};
  text-align: center;
  color: #bf1650;

  /* &::before {
    display: inline;
    content: "⚠ ";
  } */
`;
