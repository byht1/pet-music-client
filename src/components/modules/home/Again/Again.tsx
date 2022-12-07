import { Box } from "components/global/Box";
import { MySlider } from "components/global/Slide/MySlider";
import { ItemRecommendation } from "components/modules/ItemRecommendation";
import { static2 } from "static/static";
import { SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";

export const Again = () => {
  return (
    <Box pt="120px" pb="120px">
      <MySlider
        titleText="Послухати ще раз"
        dataLength={static2.length}
        all="Весь список"
      >
        {static2.map((item, i) => (
          <SwiperSlide key={uuidv4()} virtualIndex={i}>
            <ItemRecommendation item={item} />
          </SwiperSlide>
        ))}
      </MySlider>
    </Box>
  );
};
