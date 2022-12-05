import { useState } from "react";
import Swiper from "swiper";

export const useDisabledSwiper = (show: number) => {
  const [swiper, setSwiper] = useState<Swiper | null>(null);
  const [current, setCurrent] = useState(show);
  const [slides] = useState(show);

  return { swiper, setSwiper, current, setCurrent, slides };
};
