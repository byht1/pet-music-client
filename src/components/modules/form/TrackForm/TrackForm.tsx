import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box } from "components/global/Box";
import { FormBox } from "../FormBox";
import { ITrackForm } from "./type";
import { schemaTrackNew } from "./schema";
import { Button } from "components/global/button/Button";
import { TrackStepOne } from "./TrackStepOne";
import { TrackStepTwo } from "./TrackStepTwo";
import { TrackStepThree } from "./TrackStepThree";

type Props = {
  current: number;
  max: number;
  set: React.Dispatch<React.SetStateAction<number>>;
};

export const TrackForm: FC<Props> = ({ current, max, set }) => {
  const methods = useForm<ITrackForm>({
    resolver: yupResolver(schemaTrackNew),
  });
  const { handleSubmit, trigger } = methods;

  const submit = (data: any) => {
    console.log(data);
  };

  const formIsValid = async () => {
    set((p) => p + 1);
  };

  return (
    <Box pt={5} pb={5}>
      {current === 1 && <h2>Загальна інформація</h2>}
      <Box pt={5} pb={5} display="flex" justifyContent="center">
        <FormBox methods={methods} submit={handleSubmit(submit)}>
          {current === 1 && <TrackStepOne />}
          {current === 2 && <TrackStepTwo />}
          {current === 3 && <TrackStepThree />}

          {current !== 1 && (
            <Button click={() => set((p) => p - 1)} type="button">
              Назад
            </Button>
          )}
          {current !== max && (
            <Button click={formIsValid} type="button">
              Далі
            </Button>
          )}
          {current === max && <Button>Додати альбом</Button>}
        </FormBox>
      </Box>
    </Box>
  );
};
