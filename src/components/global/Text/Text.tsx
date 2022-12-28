import React, { FC, ReactNode } from "react";
import { TextBox } from "./Text.styled";

type Props = {
  family?: "blinker" | "roboto";
  weight?: 400 | 600 | 700;
  size?: 12 | 14 | 16 | 20 | 32 | 64;
  lh?: number;
  mt?: number;
  mb?: number;
  color?: string;

  children: string | JSX.Element | ReactNode;
};

export const Text: FC<Props> = ({
  children,
  family = "roboto",
  size = 16,
  weight = 400,
  lh = 24,
  mt = null,
  mb = null,
  color,
}) => {
  return (
    <TextBox
      family={family}
      size={size}
      weight={weight}
      lh={lh}
      mt={mt}
      mb={mb}
      c={color}
    >
      {children}
    </TextBox>
  );
};
