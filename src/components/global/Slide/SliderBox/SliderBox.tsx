import React, { FC, ReactNode } from "react";
import { Virtual } from "swiper";
import { Swiper } from "swiper/react";
import { TSwiper } from "../type/swiper";

import "swiper/css";

type Props = {
  show: number;
  set: React.Dispatch<React.SetStateAction<TSwiper | null>>;
  children: ReactNode;
};

export const SliderBox: FC<Props> = ({ set, show, children }) => {
  return (
    <Swiper
      modules={[Virtual]}
      virtual
      slidesPerView={show}
      spaceBetween={24}
      slidesPerGroup={1}
      onSwiper={(s) => set(s)}
      className="mySwiper"
      allowTouchMove={false}
    >
      {children}
    </Swiper>
  );
};
