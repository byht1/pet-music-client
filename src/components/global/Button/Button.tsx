import React, { FC } from "react";

type Props = {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: JSX.Element | string;
  click?: () => any;
};

export const Button: FC<Props> = ({
  type = "submit",
  disabled = false,
  children,
  click,
}) => {
  return (
    <button onClick={click} type={type} disabled={disabled}>
      {children}
    </button>
  );
};
