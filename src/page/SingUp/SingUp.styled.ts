import styled from "styled-components";
import { img } from "img/auth";

const { ImgBgX1Webp, ImgBgX2Webp, ImgBgX3Webp, ImgBgX1, ImgBgX2, ImgBgX3 } =
  img;

export const ImgBackground = styled.div<any>`
  height: 100vh;
  padding: 0 ${(p) => p.theme.space[5]}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: ${bg()};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
`;

function bg() {
  const width = window.innerWidth;
  // const width = 1920;

  return width > 1920
    ? `image-set(
    url(${ImgBgX2Webp}) 1x,
    url(${ImgBgX3Webp}) 2x,
    url(${ImgBgX2}) 1x,
    url(${ImgBgX3}) 2x
  );`
    : `image-set(
    url(${ImgBgX1Webp}) 1x,
    url(${ImgBgX2Webp}) 2x,
    url(${ImgBgX1}) 1x,
    url(${ImgBgX2}) 2x
  );`;
}

// image-set(
//     url(${ImgBgX1Webp}) 1x,
//     url(${ImgBgX2Webp}) 2x,
//     url(${ImgBgX3Webp}) 3x,
//     url(${ImgBgX1}) 1x,
//     url(${ImgBgX2}) 2x,
//     url(${ImgBgX3}) 3x
//   );
