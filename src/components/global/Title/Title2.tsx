import React, { FC } from "react";
import { H2 } from "./Title.styled";

type Props = {
  children: string;
};

export const Title2: FC<Props> = ({ children }) => {
  return <H2>{children}</H2>;
};
