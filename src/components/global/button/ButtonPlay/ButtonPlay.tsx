import React, { FC } from "react";
import { Button } from "./ButtonPlay.styled";
import { BsPlayCircleFill, BsPauseCircleFill } from "react-icons/bs";

type Props = {
  click?: () => void;
};

export const ButtonPlay: FC<Props> = ({ click }) => {
  return (
    <Button onClick={click}>
      <BsPlayCircleFill size={36} />
    </Button>
  );
};
