import React, { FC } from "react";
import { ButtonLinkBox } from "./ButtonLink.styled";

type Props = {
  link: string;
  children: JSX.Element | string;
  ml?: number;
};

export const ButtonLink: FC<Props> = ({ children, link, ml }) => {
  return <ButtonLinkBox to={link} ml={ml}>{children}</ButtonLinkBox>;
};
