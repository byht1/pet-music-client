import React, { FC } from "react";
import { CurrentProgress, ProgressBox } from "./Progress.styled";

type Props = {
  value: number;
};

export const Progress: FC<Props> = ({ value }) => {
  return (
    <ProgressBox>
      <CurrentProgress v={value} />
    </ProgressBox>
  );
};
