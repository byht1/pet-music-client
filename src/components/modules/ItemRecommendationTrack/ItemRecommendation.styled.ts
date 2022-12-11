import styled from "styled-components";

export const TrackBox = styled.div<any>`
  position: relative;
  width: 100%;

  border-radius: ${(p) => p.theme.radii.inputAuthForm};
  overflow: hidden;

  font-family: ${(p) => p.theme.fonts.roboto};

  font-size: ${(p) => p.theme.fontSizes.normal};
  line-height: ${(p) => p.theme.lineHeights.body};
  text-align: center;

  background-image: ${(p) => `url(${p.dg})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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

  clip-path: circle(122px at 50% 260px);

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
  ${(p) => (p.m ? `margin: 0 auto;` : "")}
  ${(p) =>
    p.flex
      ? "display: flex; justify-content: center; align-items: center;  "
      : ""}
  width: 100%;
  height: 100%;

  border: ${(p) => (p.b ? p.b : 6)}px solid ${(p) => p.c};
  border-radius: 50%;
`;

// export const InputRange = styled.input<any>`
//   width: 100%;

//   -webkit-appearance: none;
//   margin-right: 15px;
//   width: 100%;
//   height: 7px;

//   cursor: pointer;

//   background: ${(p) => p.theme.colors.border};
//   border-radius: 5px;
//   background-image: linear-gradient(
//     ${(p) => p.theme.colors.w},
//     ${(p) => p.theme.colors.w}
//   );
//   background-size: ${(p) => p.progress}% 100%;
//   background-repeat: no-repeat;

//   &::-webkit-slider-thumb {
//     -webkit-appearance: none;
//     height: 16px;
//     width: 16px;
//     border-radius: 50%;
//     background: ${(p) => p.theme.colors.w};
//     cursor: pointer;
//     box-shadow: 0 0 2px 0 #555;
//     transition: background 0.3s ease-in-out;
//   }

//   &::-webkit-slider-runnable-track {
//     -webkit-appearance: none;
//     box-shadow: none;
//     border: none;
//     background: transparent;
//   }
// `;

export const StatisticsList = styled.ul`
  margin-top: 24px;
  padding: 12px 8px;

  display: flex;
  justify-content: space-between;

  border-radius: 20px;

  text-align: center;

  background: rgba(144, 135, 164, 0.8);
  color: #ffffff;

  backdrop-filter: blur(5px);
`;

export const StatisticsEl = styled.li`
  width: 100%;
`;

export const StatisticsText = styled.p`
  font-family: ${(p) => p.theme.fonts.roboto};

  font-size: ${(p) => p.theme.fontSizes.normalMin};
  line-height: 1.43;
  /* identical to box height, or 143% */

  text-align: center;
`;

export const Statistics = styled.p`
  font-family: ${(p) => p.theme.fonts.roboto};
  font-weight: 700;
  font-size: ${(p) => p.theme.fontSizes.normal};
  line-height: ${(p) => p.theme.lineHeights.body};
`;
