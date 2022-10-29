import { useState } from "react";
import { Box } from "components/global/Box";
import { BoxStepNumber } from "./CurrentStep.styled";
import { MdDone } from "react-icons/md";
import { CurrentStepItem } from "./CurrentStepItem";
import { v4 as uuidv4 } from "uuid";

type Props = {};

export const CurrentStep = (props: Props) => {
  const [current, setCurrent] = useState(3);
  const [max] = useState(4);
  const [arr] = useState(Array.from(Array(4).keys()));

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

      <Box mt={5}>
        <button onClick={() => setCurrent((p) => p + 1)}>Плюс</button>
        <button onClick={() => setCurrent((p) => p - 1)}>Мінус</button>
      </Box>
    </Box>
  );
};
