import { Box } from "components/global/Box";
import { Container } from "components/global/Container";
import { Title2 } from "components/global/Title";
import { useDisabledSwiper } from "hook/useDisabledSwiper";
import React, { FC } from "react";
import { NavButtonSlider } from "../NavButtonSlider";
import { SliderBox } from "../SliderBox";

type Props = {
  titleText: string;
  children: any;
  dataLength: number;
  show?: number;
};

export const MySlider: FC<Props> = ({
  children,
  titleText,
  dataLength,
  show = 6,
}) => {
  const { swiper, current, setCurrent, setSwiper, slides } =
    useDisabledSwiper(show);
  return (
    <Container>
      <div>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Title2>{titleText}</Title2>

          {swiper && (
            <NavButtonSlider
              swiper={swiper}
              showNext={current === dataLength}
              showPrev={slides === current}
              set={setCurrent}
            />
          )}
        </Box>

        <Box mt="40px">
          <SliderBox set={setSwiper} show={slides}>
            {children}
          </SliderBox>
        </Box>
      </div>
    </Container>
  );
};
