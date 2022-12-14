import { FC } from "react";
import { TextBox, TextDecorate } from "./AuthText.styled";

type Props = {
  path: string;

  urlText: string;
  text?: string;
};

export const AuthText: FC<Props> = ({ path = "/", text, urlText }) => {
  return (
    <TextBox>
      {text && <p>{text}</p>}

      <TextDecorate to={path}>{urlText}</TextDecorate>
    </TextBox>
  );
};
