import styled from "styled-components";

const weights = {
  400: "normal",
  600: "semiBold",
  700: "bold",
};

const sizes = {
  12: "min",
  14: "normalMin",
  16: "normal",
  20: "normalBig",
  32: "normalMax",
  64: "max",
};

type TText = {
  family: "blinker" | "roboto";
  weight: 400 | 600 | 700;
  size: 12 | 14 | 16 | 20 | 32 | 64;
  lh: number;
  mt: number | null;
  mb: number | null;
  c?: string;
};

export const TextBox = styled.p<TText>`
  ${(p) => p.mt && `margin-top: ${p.mt}px;`}
  ${(p) => p.mb && `margin-bottom: ${p.mb}px;`}
  font-family: ${(p) => p.theme.fonts[p.family]};
  font-weight: ${(p) => p.theme.fontWeights[weights[p.weight]]};
  font-size: ${(p) => p.theme.fontSizes[sizes[p.size]]};
  line-height: ${(p) => p.lh / p.size};

  ${(p) => p.c && `color: ${p.theme.colors[p.c]}`}
`;
