import React, { FC } from "react";
import { ButtonBox } from "./Button.styled";

type Props = {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: JSX.Element | string;
  click?: () => any;

  w?: string;
  h?: string;
  bg?: string;
  color?: string;
  hoverBg?: string;
  hoverC?: string;
  mb?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  p?: boolean;
};

export const Button: FC<Props> = ({
  type = "submit",
  disabled = false,
  p = true,
  children,
  click,
  w,
  h,
  bg,
  color,
  hoverBg,
  hoverC,
  ...props
}) => {
  return (
    <ButtonBox
      onClick={click}
      type={type}
      disabled={disabled}
      padding={p}
      w={w}
      h={h}
      bg={bg}
      color={color}
      hoverBg={hoverBg}
      hoverC={hoverC}
      {...props}
    >
      {children}
    </ButtonBox>
  );
};
