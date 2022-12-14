import React, { FC } from "react";

import { AlbumStepOne } from "./AlbumStepOne/AlbumStepOne";
import { Button } from "components/global/button/Button";
import { AlbumStepThree } from "./AlbumStepThree/AlbumStepThree";
import { Box } from "components/global/Box";
import { TitleH2 } from "./AlbumForm.styled";
import { useAlbumForm } from "../../hook/useAlbumForm";
import { FormBox } from "../../../../global/form/FormBox";
import { AlbumStepTwo } from "./AlbumStepTwo";

type Props = {
  current: number;
  max: number;
  set: React.Dispatch<React.SetStateAction<number>>;
};

export const AlbumForm: FC<Props> = ({ current, max, set }) => {
  const { handleSubmit, methods, submit, formIsValid, errorFormTwo } =
    useAlbumForm(set, current);

  return (
    <Box pt={5} pb={5}>
      {current === 1 && <TitleH2>Загальна інформація</TitleH2>}
      {current === 2 && (
        <TitleH2>Виберить жанри до яких буде відноситися альбом</TitleH2>
      )}
      {current === 3 && <TitleH2>Постер альбому</TitleH2>}

      <Box pt={5} pb={5} display="flex" justifyContent="center">
        <FormBox methods={methods} submit={handleSubmit(submit)}>
          {current === 1 && <AlbumStepOne />}
          {current === 2 && <AlbumStepTwo error={errorFormTwo} />}
          {current === 3 && <AlbumStepThree />}

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
