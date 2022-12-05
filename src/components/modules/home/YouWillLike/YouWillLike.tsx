import { Box } from "components/global/Box";
import { ItemRecommendation } from "components/modules/ItemRecommendation";
import { MySlider } from "components/global/Slide/MySlider";
import { static1 } from "static/static";
import { SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";

export const YouWillLike = () => {
  return (
    <Box pt="120px">
      <MySlider titleText="Вам сподобається" dataLength={static1.length}>
        {static1.map((item, i) => (
          <SwiperSlide key={uuidv4()} virtualIndex={i}>
            <ItemRecommendation item={item} />
          </SwiperSlide>
        ))}
      </MySlider>
    </Box>
  );
};
