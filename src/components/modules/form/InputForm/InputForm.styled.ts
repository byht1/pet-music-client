import styled from "styled-components";

export const Label = styled.label`
  position: relative;
  display: flex;
  justify-content: flex-start;
`;

export const NameInput = styled.span`
  display: block;
  margin-right: ${(p) => p.theme.space[4]}px;
  text-align: right;
  width: auto;
  width: 200px;
`;

export const Input = styled.input`
  /* width: 100%;
  max-width: 300px; */
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
