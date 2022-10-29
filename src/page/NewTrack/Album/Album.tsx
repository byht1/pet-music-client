import { CurrentStep } from "components/modules/CurrentStep/CurrentStep";
import React from "react";
import { Box } from "components/global/Box";

type Props = {};

export const Album = (props: Props) => {
  return (
    <Box pl={4} pr={4} pt={5} pb={5}>
      <CurrentStep />
    </Box>
  );
};
