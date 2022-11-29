import styled from "styled-components";
import { Link } from "react-router-dom";

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
`;

export const ArrowLink = styled(Link)`
  position: absolute;
  top: 81px;
  left: 78px;

  transform: translateY(-50%);

  width: 24px;
  height: 24px;
`;
