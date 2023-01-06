import { FC } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ArrowButton } from "./ArrowBack.styled";

type Props = {
  size?: number;
  color?: string;
  to?: string;
};

export const ArrowBack: FC<Props> = ({ size = 24, color, to }) => {
  const navigate = useNavigate();
  return (
    <ArrowButton
      onClick={() => {
        to ? navigate(to) : navigate(-1);
      }}
      type="button"
    >
      <MdArrowBackIosNew size={size} color={color ?? "currentColor"} />
    </ArrowButton>
  );
};
