import { bgImg } from "helper";
import { heroImg } from "img/home";
import styled from "styled-components";

export const Section = styled.section`
  height: 628px;
  display: flex;
  align-items: center;

  background-image: ${bgImg(heroImg)};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Text = styled.p`
  margin-top: 32px;
  margin-bottom: 40px;
  width: 314px;

  font-family: ${(p) => p.theme.fonts.roboto};
`;

export const Title = styled.h2`
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: ${(p) => p.theme.space[7]}px;
  line-height: ${(p) => p.theme.lineHeights.heading};
`;

export const Span = styled.span`
  display: block;
  margin-bottom: 12px;
`;

export const Number = styled.span`
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: 90px;
  line-height: ${(p) => p.theme.lineHeights.min};

  color: ${(p) => p.theme.colors.vt};
`;
