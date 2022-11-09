import React from "react";
import { InputForm } from "../../InputForm";

type Props = {};

export const TrackStepOne = (props: Props) => {
  return (
    <>
      <InputForm title="Назва треку" inputType="name" name="name" />
      <InputForm title="Виконавець" inputType="text" name="author_track" />
      <InputForm
        title="Дата першого виконання"
        inputType="date"
        name="date_implementation"
      />
    </>
  );
};
