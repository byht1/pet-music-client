import { Box } from "components/global/Box";
import { ButtonPlay } from "components/global/button/ButtonPlay";
import React, { FC } from "react";
import { InputRangeProgress } from "components/global/form/InputForm";
import {
  Author,
  Box2,
  Circle,
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
    duration: number;
  };
};

export const ItemRecommendationTrack: FC<Props> = ({ item }) => {
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
                    <ButtonPlay link={item.link_track} />
                  </Circle>
                </Circle>
              </Circle>
            </Circle>
          </Box>
        </Box>
        <Box mt="44px">
          <InputRangeProgress
            maxLength={item.duration}
            link={item.link_track}
          />

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
