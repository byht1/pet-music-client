import { FC } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ArrowButton } from "./ArrowBack.styled";

type Props = {
  size?: number;
  color?: string;
};

export const ArrowBack: FC<Props> = ({ size = 24, color }) => {
  const navigate = useNavigate();
  return (
    <ArrowButton onClick={() => navigate(-1)}>
      <MdArrowBackIosNew size={size} color={color ?? "currentColor"} />
    </ArrowButton>
  );
};
