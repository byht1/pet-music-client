import styled from "styled-components";

export const WrapperAuthForm = styled.div`
  position: relative;

  width: ${(p) => p.theme.size.authFormWidth};
  /* height: ${(p) => p.theme.size.authFormHeight}; */

  padding-top: 78px;
  padding-left: ${(p) => p.theme.space[8]}px;
  padding-right: ${(p) => p.theme.space[8]}px;
  padding-bottom: 42px;

  border-radius: ${(p) => p.theme.radii.authForm};

  background-color: ${(p) => p.theme.colors.fb};
`;

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
