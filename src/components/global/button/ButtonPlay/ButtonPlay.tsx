import React, { FC, useState } from "react";
import { Button } from "./ButtonPlay.styled";
import { BsPlayCircleFill, BsPauseCircleFill } from "react-icons/bs";

type Props = {
  onPaly: () => void;
  onPause: () => void;
};

export const ButtonPlay: FC<Props> = ({ onPaly, onPause }) => {
  const [action, setAction] = useState(false);

  const play = () => {
    if (action) {
      onPause();
      setAction(false);
      return;
    }

    onPaly();
    setAction(true);
  };

  return (
    <Button onClick={play}>
      {action ? (
        <BsPauseCircleFill size={36} />
      ) : (
        <BsPlayCircleFill size={36} />
      )}
    </Button>
  );
};
