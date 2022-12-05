import React, { FC } from "react";
import { GroupTitle, NameTrack, Poster } from "./ItemRecommendation.styled";

type Props = {
  item: {
    id: number;
    group: string;
    track_name: string;
    picture: string;
  };
};

export const ItemRecommendation: FC<Props> = ({ item }) => {
  return (
    <div>
      <Poster src={item.picture} alt={`Постер до ${item.track_name}`} />
      <GroupTitle>{item.group}</GroupTitle>
      <NameTrack>{item.track_name}</NameTrack>
    </div>
  );
};
