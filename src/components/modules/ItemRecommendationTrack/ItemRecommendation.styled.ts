import { theme } from "theme/theme";
import styled from "styled-components";

export const TrackBox = styled.div<any>`
  position: relative;
  width: 100%;

  /* padding: 24px 12px;
  padding-bottom: 12px; */

  border-radius: ${(p) => p.theme.radii.inputAuthForm};
  overflow: hidden;

  font-family: ${(p) => p.theme.fonts.roboto};

  font-size: ${(p) => p.theme.fontSizes.normal};
  line-height: ${(p) => p.theme.lineHeights.body};
  text-align: center;

  /* background-color: red; */

  background-image: ${(p) => `url(${p.dg})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* background: #a37df0; */
  backdrop-filter: blur(5px);
`;

export const Box2 = styled.div`
  padding: 24px 12px;
  padding-bottom: 12px;

  background: rgba(163, 125, 240, 0.3);

  backdrop-filter: blur(5px);
`;

export const Test = styled.div<any>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  --rect-size: 246px;
  clip-path: circle(50% at 50% 50%);

  background-image: ${(p) => `url(${p.bgImg})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Author = styled.p`
  font-weight: 700;
`;

export const Name = styled.p``;

export const Circle = styled.div<any>`
  /* position: relative; */
  ${(p) => (p.m ? `margin: 0 auto;` : "")}
  ${(p) =>
    p.flex
      ? "display: flex; justify-content: center; align-items: center;"
      : ""}
  width: 100%;
  height: 100%;

  border: ${(p) => (p.b ? p.b : 6)}px solid ${(p) => p.c};
  border-radius: 50%;

  backdrop-filter: blur(5px) opacity(0);
  /* backdrop-filter: ; */
`;

export const ImgBgBox = styled.div<any>`
  position: absolute;
  width: 100%;
  height: 100%;
`;
