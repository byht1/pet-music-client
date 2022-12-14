import { Link } from "react-router-dom";
import styled from "styled-components";

import { bgImg } from "helper/bgImg";
import { newTrackImg } from "img/newTrackForm";

export const Section = styled.section`
  padding: 120px 0;
  /* display: flex;
  align-items: center; */

  background-image: ${bgImg(newTrackImg)};
  background-repeat: no-repeat;
  /* background-position: center; */
  background-size: 100% 184px;
`;

export const Links = styled(Link)`
  margin-right: 3px;

  text-decoration-line: underline;

  color: ${(p) => p.theme.colors.va};
`;

// export const Text = styled.p`
//   font-family: ;
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
// `;
