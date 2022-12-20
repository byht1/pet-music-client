import React from "react";
import { useFormContext } from "react-hook-form";

export const StepTwo = () => {
  const { register } = useFormContext();

  return (
    <>
      <label>
        <input type="text" {...register("track__link3")} />
      </label>
      <label>
        <input type="text" {...register("track__link4")} />
      </label>
    </>
  );
};
