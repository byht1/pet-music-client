import { FC } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { ArrowLink } from "./ArrowBack.styled";

type Props = {
  path: string | undefined;
  size?: number;
  color?: string;
};

export const ArrowBack: FC<Props> = ({ path, size = 24, color }) => {
  return (
    <ArrowLink to={path ?? "/"}>
      <MdArrowBackIosNew size={size} color={color ?? "currentColor"} />
    </ArrowLink>
  );
};
