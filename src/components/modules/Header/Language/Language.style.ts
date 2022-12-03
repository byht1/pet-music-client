import styled from "styled-components";
import { MdOutlineLanguage } from "react-icons/md";

export const Globe = styled(MdOutlineLanguage)`
  color: ${(p) => p.theme.colors.vs};
`;

export const Text = styled.p`
  margin-left: 12px;
  font-family: ${(p) => p.theme.fonts.roboto};
  font-size: ${(p) => p.theme.fontSizes.normal};
  line-height: ${(p) => p.theme.lineHeights.body};
`;

export const LanguageMenu = styled.div`
  margin-top: 4px;
  padding: 4px 12px;

  border-radius: 8px;

  background-color: white;
`;
