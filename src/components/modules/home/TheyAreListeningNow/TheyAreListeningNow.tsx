import { Box } from "components/global/Box";
import { MySlider } from "components/global/Slide/MySlider";
import { ItemRecommendationTrack } from "components/modules/ItemRecommendationTrack";
import { static3 } from "static/static";
import { SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";

export const TheyAreListeningNow = () => {
  return (
    <Box pt="120px">
      <MySlider
        titleText="Вам сподобається"
        dataLength={static3.length}
        show={3}
        all="Слухати все"
      >
        {static3.map((item, i) => (
          <SwiperSlide key={uuidv4()} virtualIndex={i}>
            <ItemRecommendationTrack item={item} />
          </SwiperSlide>
        ))}
      </MySlider>
      {/* <CardAudioPlayer /> */}
    </Box>
  );
};
