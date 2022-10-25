import React, { FC } from "react";

type Props = {
  type?: "button" | "submit" | "reset";
  children: JSX.Element | string;
};

export const Button: FC<Props> = ({ type = "submit", children }) => {
  return <button type={type}>{children}</button>;
};
