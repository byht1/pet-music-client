import React, { FC } from "react";
import { Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { TSwiper } from "../type/swiper";
import { v4 as uuidv4 } from "uuid";

import "swiper/css";

type Props = {
  show: number;
  set: React.Dispatch<React.SetStateAction<TSwiper | null>>;
  children: any;
};

export const SliderBox: FC<Props> = ({ set, show, children }) => {
  return (
    <Swiper
      navigation={true}
      modules={[Virtual]}
      virtual
      slidesPerView={show}
      spaceBetween={24}
      slidesPerGroup={1}
      loopFillGroupWithBlank={true}
      onSwiper={(s) => set(s)}
      className="mySwiper"
    >
      {children}
      {/* {slider.map((el, i) => (
        <SwiperSlide key={uuidv4()} virtualIndex={i}>
          <SwiperItem item={el} />
        </SwiperSlide>
      ))} */}
    </Swiper>
  );
};
