import { Box } from "components/global/Box";
import { convertTime } from "helper";
import React, { FC, useEffect, useState } from "react";
import { changeRewind, getCurrentTime, getTrackLink } from "redux/activeTrack";
import { useAppDispatch, useAppSelector } from "redux/hook";
import { InputRange } from "./InputForm.styled";

type Props = {
  maxLength: number;
  link: string;
};

export const InputRangeProgress: FC<Props> = ({ maxLength, link }) => {
  const trackLink = useAppSelector(getTrackLink);
  const currentTime = useAppSelector(getCurrentTime);
  const dispatch = useAppDispatch();
  const [time, setTime] = useState(0);
  const current = trackLink === link;

  useEffect(() => {
    if (!current) {
      setTime(0);
      return;
    }

    setTime(currentTime);
  }, [current, currentTime]);

  const progress = () => {
    const onePoints = maxLength / 100;

    return time / onePoints;
  };

  const onChangeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!current) return;

    dispatch(changeRewind(Number(e.target.value)));
  };

  return (
    <>
      <InputRange
        progress={progress()}
        type="range"
        min={0}
        max={maxLength}
        value={time}
        onChange={onChangeCurrentTime}
      />

      <Box display="flex" justifyContent="space-between">
        <p>{convertTime(time)}</p>
        <p>{convertTime(maxLength)}</p>
      </Box>
    </>
  );
};
