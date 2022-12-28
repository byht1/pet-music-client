import { BoxForm } from "page/NewTrack/NewTrack.styled";
import styled from "styled-components";

export const DropZone = styled(BoxForm)`
  text-align: center;
`;

export const TextFile = styled.span`
  display: block;

  font-family: ${(p) => p.theme.fonts.roboto};
  font-size: ${(p) => p.theme.fontSizes.min};
  line-height: ${(p) => p.theme.lineHeights.big};
`;

export const LabelFile = styled.label`
  display: block;
  width: 100%;
  height: 100%;
`;

export const InputFile = styled.input`
  /* display: none; */
  width: 100%;
  height: 100%;
`;
