import styled from "styled-components";
import { MdOutlineLanguage } from "react-icons/md";

export const LanguageBox = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
`;

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
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
  padding: 4px 12px;

  border-radius: 8px;

  background-color: white;
`;

export const MenuText = styled.span`
  margin: 0;
  color: ${(p) => p.theme.colors.bs};

  cursor: pointer;
`;
