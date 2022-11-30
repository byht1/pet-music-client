import { FC } from "react";
import { ContainerBox } from "./Container.styled";

type Props = { children: JSX.Element };

export const Container: FC<Props> = ({ children }) => {
  return <ContainerBox>{children}</ContainerBox>;
};
