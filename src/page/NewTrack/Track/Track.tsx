import { Box } from "components/global/Box";
import { CurrentStep } from "components/modules/CurrentStep";
import { TrackForm } from "components/modules/form/old/TrackForm";
import { useState } from "react";

type Props = {};

export const Track = (props: Props) => {
  const [steps] = useState(3);
  const [current, setCurrent] = useState(1);
  return (
    <Box pl={4} pr={4} pt={5} pb={5}>
      <CurrentStep current={current} max={steps} set={setCurrent} />
      <TrackForm current={current} max={steps} set={setCurrent} />
    </Box>
  );
};

{
  /* <Icon src={UserIcon} alt="user-icon" />; */
}
