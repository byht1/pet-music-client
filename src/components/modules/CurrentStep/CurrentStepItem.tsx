import { FC } from "react";
import { BackgroundLine, CurrentStepNumber, Line } from "./CurrentStep.styled";

type Props2 = {
  current: number;
  content: number;
  children: any;
  isLine: boolean;
};

export const CurrentStepItem: FC<Props2> = ({
  current,
  content,
  children,
  isLine,
}) => {
  if (isLine) {
    return <CurrentStepNumber current={current}>{children}</CurrentStepNumber>;
  }
  return (
    <>
      <CurrentStepNumber current={current}>{children}</CurrentStepNumber>
      <Line step={content + 1} current={current}>
        <BackgroundLine step={content + 1} current={current} />
      </Line>
    </>
  );
};
