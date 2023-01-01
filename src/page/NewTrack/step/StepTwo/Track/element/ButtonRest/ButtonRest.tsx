import { useFormContext } from "react-hook-form";

import { defaultFormTrack } from "helper";
import { ResButton } from "./ButtonRest.styled";

export const ButtonRest = () => {
  const { reset } = useFormContext();

  return (
    <ResButton
      onClick={() => reset((formValues) => defaultFormTrack)}
      type="button"
    >
      Скасувати
    </ResButton>
  );
};
