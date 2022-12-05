import Swiper from "swiper";

import { Box } from "components/global/Box";
import { FC } from "react";
import { ButtonSwiperArrow } from "./NavButtonSlider.styled";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

type Props = {
  swiper: Swiper;
  showNext: boolean;
  showPrev: boolean;
  set: React.Dispatch<React.SetStateAction<number>>;
};

export const NavButtonSlider: FC<Props> = ({
  swiper,
  showNext,
  showPrev,
  set,
}) => {
  const prev = () => {
    set((prev) => prev - 1);
    swiper.slidePrev();
  };

  const next = () => {
    set((prev) => prev + 1);
    swiper.slideNext();
  };
  return (
    <Box display="flex">
      <ButtonSwiperArrow onClick={prev} disabled={showPrev}>
        <AiOutlineArrowLeft size={24} />
      </ButtonSwiperArrow>
      <ButtonSwiperArrow onClick={next} disabled={showNext}>
        <AiOutlineArrowRight size={24} />
      </ButtonSwiperArrow>
    </Box>
  );
};
