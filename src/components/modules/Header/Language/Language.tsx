import React, { useLayoutEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { Box } from "components/global/Box";
import { ReactComponent as Ua } from "img/svg/flag_ua.svg";
import { ReactComponent as Us } from "img/svg/flag_us.svg";
import {
  Globe,
  LanguageBox,
  LanguageMenu,
  MenuText,
  Text,
} from "./Language.styled";

const languages = [
  { lang: "UA", icon: <Ua /> },
  { lang: "EN", icon: <Us /> },
];

const LANGUAGES_KEY = "language";

export const Language = () => {
  const [language, setLanguage] = useState(() => {
    const storage = window.localStorage.getItem(LANGUAGES_KEY);

    if (!storage) return languages[0].lang;

    return JSON.parse(storage);
  });
  const [show, setShow] = useState(false);

  useLayoutEffect(() => {
    localStorage.setItem(LANGUAGES_KEY, JSON.stringify(language));
  }, [language]);

  return (
    <Box position="relative" ml="32px">
      <LanguageBox onClick={() => setShow(!show)}>
        <Globe size={24} />
        <Text>{language}</Text>
        <MdArrowDropDown size={24} />
      </LanguageBox>

      {show &&
        languages.map((x) =>
          x.lang === language ? null : (
            <LanguageMenu onClick={() => setLanguage(x.lang)}>
              {x.icon}
              <MenuText>{x.lang}</MenuText>
            </LanguageMenu>
          )
        )}
    </Box>
  );
};
