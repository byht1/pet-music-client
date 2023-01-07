import React, { FC } from "react";

import { Box } from "components/global/Box";
import { Button } from "components/global/button/Button";
import { ButtonRest } from "../StepTwo/Track/element/ButtonRest";

type Props = {
  onClick: (data?: any) => any;
  buttonType: "button" | "submit";
};

export const ButtonOption: FC<Props> = ({ onClick, buttonType }) => {
  return (
    <Box mt="64px" display="flex" justifyContent="flex-end" gridGap="40px">
      <ButtonRest />
      <Button w="136px" type={buttonType} click={onClick}>
        {buttonType === "button" ? "Далі" : "Зберегти"}
      </Button>
    </Box>
  );
};
