import { FC, useState } from "react";
import { Box } from "components/global/Box";
import { BoxStepNumber } from "./CurrentStep.styled";
import { MdDone } from "react-icons/md";
import { CurrentStepItem } from "./CurrentStepItem";
import { v4 as uuidv4 } from "uuid";
import { Button } from "components/global/button/Button";

type Props = {
  current: number;
  max: number;
  set: React.Dispatch<React.SetStateAction<number>>;
};

export const CurrentStep: FC<Props> = ({ current, max, set }) => {
  const [arr] = useState(Array.from(Array(max).keys()));

  return (
    <Box>
      <BoxStepNumber group={max * 2 - 1}>
        {arr.map((x, i, arr) => {
          const content = x + 1 < current ? <MdDone size={40} /> : x + 1;
          const isLine = arr.length === i + 1;
          return (
            <CurrentStepItem
              key={uuidv4()}
              current={current}
              content={x + 1}
              isLine={isLine}
            >
              {content}
            </CurrentStepItem>
          );
        })}
      </BoxStepNumber>

      {/* <Box mt={4} display="flex" justifyContent="space-between">
        <Button click={() => set((p) => p - 1)} disabled={current <= 1}>
          Назад
        </Button>
        <Button click={() => set((p) => p + 1)} disabled={current === max}>
          Далі
        </Button>
      </Box> */}
    </Box>
  );
};
