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
};

export const Button: FC<Props> = ({
  type = "submit",
  disabled = false,
  children,
  click,
  w,
  h,
  bg,
  color,
  hoverBg,
  hoverC,
}) => {
  return (
    <ButtonBox
      onClick={click}
      type={type}
      disabled={disabled}
      w={w}
      h={h}
      bg={bg}
      color={color}
      hoverBg={hoverBg}
      hoverC={hoverC}
    >
      {children}
    </ButtonBox>
  );
};
