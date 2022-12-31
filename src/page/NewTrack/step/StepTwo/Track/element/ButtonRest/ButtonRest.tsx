import { EFormName } from "helper";
import React from "react";
import { useFormContext } from "react-hook-form";
import { ResButton } from "./ButtonRest.styled";

export const ButtonRest = () => {
  const { reset } = useFormContext();

  return (
    <ResButton
      onClick={() =>
        reset((formValues) => ({
          [EFormName.DESCRIPTION]: "",
          [EFormName.GENRES]: "",
          [EFormName.NAME]: "",
          [EFormName.PERMALINK]: undefined,
          [EFormName.PICTURE]: "",
          [EFormName.TAGS]: "",
          [EFormName.TRACK]: "",
        }))
      }
      type="button"
    >
      Скасувати
    </ResButton>
  );
};
