import { useState } from "react";

import { Box } from "components/global/Box";
import { AlbumForm } from "components/modules/form/old/AlbumForm";
import { CurrentStep } from "components/modules/CurrentStep";

type Props = {};

export const Album = (props: Props) => {
  const [steps] = useState(3);
  const [current, setCurrent] = useState(1);
  return (
    <Box pl={4} pr={4} pt={5} pb={5}>
      <CurrentStep current={current} max={steps} set={setCurrent} />
      <AlbumForm current={current} max={steps} set={setCurrent} />
    </Box>
  );
};
