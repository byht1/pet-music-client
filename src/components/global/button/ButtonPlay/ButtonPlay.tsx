import React, { FC, useEffect, useState } from "react";
import { Button } from "./ButtonPlay.styled";
import { BsPlayCircleFill, BsPauseCircleFill } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "redux/hook";
import {
  getTrackLink,
  newActionTrack,
  pauseTrack,
  playTrack,
} from "redux/activeTrack";

type Props = {
  link: string;
};

export const ButtonPlay: FC<Props> = ({ link }) => {
  const trackLink = useAppSelector(getTrackLink);
  const dispatch = useAppDispatch();
  const [action, setAction] = useState(false);
  const showButton = action && trackLink === link;

  useEffect(() => {
    if (trackLink === link) {
      setAction(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const play = () => {
    if (trackLink !== link) {
      dispatch(newActionTrack(link));
      return;
    }
    dispatch(playTrack());
  };

  const pause = () => {
    dispatch(pauseTrack());
  };

  const managementAudio = () => {
    if (action) {
      pause();
      setAction(false);
      return;
    }

    play();
    setAction(true);
  };

  return (
    <Button onClick={managementAudio}>
      {showButton ? (
        <BsPauseCircleFill size={36} />
      ) : (
        <BsPlayCircleFill size={36} />
      )}
    </Button>
  );
};
