import React, { useEffect } from "react";
import {
  changeCurrentTime,
  getActive,
  getRewind,
  getTrackLink,
} from "redux/activeTrack";
import { useAppDispatch, useAppSelector } from "redux/hook";

let audio: HTMLAudioElement;

export const CardAudioPlayer = () => {
  const trackLink = useAppSelector(getTrackLink);
  const rewind = useAppSelector(getRewind);
  const action = useAppSelector(getActive);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!trackLink) return;

    if (audio) {
      audio.src = trackLink;
      audio.play();
      return;
    }

    audio = new Audio(trackLink);
    audio.ontimeupdate = () => {
      dispatch(changeCurrentTime(Math.ceil(audio.currentTime)));
    };

    audio.play();
  }, [dispatch, trackLink]);

  useEffect(() => {
    if (!audio) return;

    audio.currentTime = rewind;
  }, [rewind, dispatch]);

  useEffect(() => {
    if (!audio) return;

    if (action) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [action, dispatch]);

  return <div style={{ display: "none" }}></div>;
};
