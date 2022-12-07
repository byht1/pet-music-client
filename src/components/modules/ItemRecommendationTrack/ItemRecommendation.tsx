import { Box } from "components/global/Box";
import { ButtonPlay } from "components/global/button/ButtonPlay";
import React, { FC } from "react";
import {
  Author,
  Box2,
  Circle,
  ImgBgBox,
  Name,
  Test,
  TrackBox,
} from "./ItemRecommendation.styled";

type Props = {
  item: {
    id: number;
    group: string;
    track_name: string;
    picture: string;
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
                    <ButtonPlay />
                  </Circle>
                </Circle>
              </Circle>
            </Circle>
          </Box>

          {/* <Circle>
          <CircleTwo>
            <CircleThree>
              <CircleFour></CircleFour>
            </CircleThree>
          </CircleTwo>
        </Circle> */}
        </Box>
        <Box mt="44px">
          <input type="range" />
        </Box>
      </Box2>
    </TrackBox>
  );
};
