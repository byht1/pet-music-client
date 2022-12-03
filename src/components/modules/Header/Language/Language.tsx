import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { Box } from "components/global/Box";
import { Globe, LanguageMenu, Text } from "./Language.style";
import { ReactComponent as Ua } from "img/svg/flag_ua.svg";
import { ReactComponent as Us } from "img/svg/flag_us.svg";

const lang = [
  { lang: "UA", icon: Ua },
  { lang: "EN", icon: Us },
];

export const Language = () => {
  const [language, setLanguage] = useState(lang[0]);
  const [show, setShow] = useState(true);

  return (
    <Box position="relative" ml="32px">
      <Box display="flex" alignItems="center">
        <Globe size={24} />
        <Text>{language.lang}</Text>
        <MdArrowDropDown size={24} />
      </Box>

      {show && <LanguageMenu></LanguageMenu>}
    </Box>
  );
};
