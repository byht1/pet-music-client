import React from "react";
import { BoxElement, Element, LoaderBox } from "./Loader.styled";

export const Loader = () => {
  return (
    <LoaderBox>
      <BoxElement>
        <Element delay={1} />
        <Element delay={2} />
        <Element delay={3} />
        <Element delay={4} />
        <Element delay={5} />
      </BoxElement>
    </LoaderBox>
  );
};
