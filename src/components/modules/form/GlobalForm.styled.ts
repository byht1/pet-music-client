import styled from "styled-components";

export const TextErrorServer = styled.p`
  text-align: center;
  color: #bf1650;
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

export const TextError2 = styled.span`
  width: ${(p) => p.theme.size.max};
  text-align: center;
  color: #bf1650;

  /* &::before {
    display: inline;
    content: "⚠ ";
  } */
`;
