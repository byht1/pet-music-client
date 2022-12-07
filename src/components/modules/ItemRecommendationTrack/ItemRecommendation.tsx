import axios from "axios";
import { Box } from "components/global/Box";
import { ButtonPlay } from "components/global/button/ButtonPlay";
import { convertTime } from "helper";
import React, { FC, useEffect, useState } from "react";
import {
  Author,
  Box2,
  Circle,
  InputRange,
  Name,
  Statistics,
  StatisticsEl,
  StatisticsList,
  StatisticsText,
  Test,
  TrackBox,
} from "./ItemRecommendation.styled";

type Props = {
  item: {
    id: number;
    group: string;
    track_name: string;
    picture: string;
    link_track: string;
  };
};

let audio: HTMLAudioElement;

export const ItemRecommendationTrack: FC<Props> = ({ item }) => {
  // const [volume, setVolume] = useState();
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const announceTrack = () => {
      // const { data } = await axios.get(item.link_track);
      audio = new Audio(item.link_track);
      console.log("🚀  audio", audio);

      audio.onloadedmetadata = () => {
        const duration = audio.duration;

        if (!duration) return;

        setDuration(Math.ceil(duration));
      };
    };

    announceTrack();
  }, [item.link_track]);

  const onPlay = () => {
    audio.ontimeupdate = () => {
      setCurrentTime(Math.ceil(audio.currentTime));
    };
    audio.play();
  };

  const onPause = () => {
    audio.pause();
  };

  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value);
    setCurrentTime(Number(e.target.value));

    // якщо музика на паузі запустити ДОДАТИ
  };

  const progress = () => {
    const onePoints = duration / 100;

    return currentTime / onePoints;
  };

  return (
    <TrackBox dg={item.picture}>
      <Box2>
        <Author>{item.group}</Author>
        <Name>{item.track_name}</Name>
        <Box mt="48px">
          <Box m="0 auto" width="280px" height="280px">
            <Circle c="rgba(237, 240, 243, 0.3)">
              <Circle c="rgba(237, 240, 243, 0.35)">
                <Circle b={5} c="#ccb6cf">
                  <Circle b={1} c="#a37df0" flex>
                    <Test bgImg={item.picture}></Test>
                    <ButtonPlay onPaly={onPlay} onPause={onPause} />
                  </Circle>
                </Circle>
              </Circle>
            </Circle>
          </Box>
        </Box>
        <Box mt="44px">
          <InputRange
            progress={progress()}
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={changeCurrentTime}
          />
          <Box display="flex" justifyContent="space-between">
            <p>{convertTime(currentTime)}</p>
            <p>{convertTime(duration)}</p>
          </Box>

          <StatisticsList>
            <StatisticsEl>
              <StatisticsText>Вподобайки</StatisticsText>
              <Statistics>200K</Statistics>
            </StatisticsEl>
            <StatisticsEl>
              <StatisticsText>Підписники</StatisticsText>
              <Statistics>32K</Statistics>
            </StatisticsEl>
            <StatisticsEl>
              <StatisticsText>Прослухано</StatisticsText>
              <Statistics>1.2М</Statistics>
            </StatisticsEl>
          </StatisticsList>
        </Box>
      </Box2>
    </TrackBox>
  );
};
