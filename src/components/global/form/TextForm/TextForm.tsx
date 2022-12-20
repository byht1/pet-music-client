import { FC } from "react";
import { Text } from "./TextForm.styled";

type Props = {
  children: string;
};

export const TextForm: FC<Props> = ({ children }) => {
  return <Text>{children}</Text>;
};
