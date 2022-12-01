import styled from "styled-components";
import { imgLohIn } from "img/auth";

const {
  ImgBgLogInX1Webp,
  ImgBgLogInX2Webp,
  ImgBgLogInX3Webp,
  ImgBgLogInX1,
  ImgBgLogInX2,
  ImgBgLogInX3,
} = imgLohIn;

export const LogUserImgBackground = styled.div<any>`
  height: 100vh;
  padding: 0 ${(p) => p.theme.space[5]}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: ${bg()};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

function bg() {
  const width = window.innerWidth;
  // const width = 1920;

  return width > 1920
    ? `image-set(
    url(${ImgBgLogInX2Webp}) 1x,
    url(${ImgBgLogInX3Webp}) 2x,
    url(${ImgBgLogInX2}) 1x,
    url(${ImgBgLogInX3}) 2x
  );`
    : `image-set(
    url(${ImgBgLogInX1Webp}) 1x,
    url(${ImgBgLogInX2Webp}) 2x,
    url(${ImgBgLogInX1}) 1x,
    url(${ImgBgLogInX2}) 2x
  );`;
}
