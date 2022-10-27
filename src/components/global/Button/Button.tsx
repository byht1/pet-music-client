import React, { FC } from "react";

type Props = {
  type?: "button" | "submit" | "reset";
  children: JSX.Element | string;
  click?: () => any;
};

export const Button: FC<Props> = ({ type = "submit", children, click }) => {
  return (
    <button onClick={click} type={type}>
      {children}
    </button>
  );
};
