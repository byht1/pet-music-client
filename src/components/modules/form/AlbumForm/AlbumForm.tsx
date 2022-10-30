import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { FormBox } from "./../FormBox/FormBox";
import { AlbumStepOne } from "./AlbumStepOne/AlbumStepOne";
import { AlbumStepTwo } from "./AlbumStepTwo/AlbumStepTwo";
import { Button } from "components/global/Button";
import { AlbumStepThree } from "./AlbumStepThree/AlbumStepThree";
import { Box } from "components/global/Box";
import { TitleH2 } from "./AlbumForm.styled";
import { serverNewAlbum } from "api/api";

type Props = {
  current: number;
  max: number;
  set: React.Dispatch<React.SetStateAction<number>>;
};

export interface IAlbumForm {
  name_album: string;
  group_name: string;
  release_date: string;
  genre: string;
  picture: string;
}

export const AlbumForm: FC<Props> = ({ current, max, set }) => {
  const methods = useForm<IAlbumForm>();
  const { handleSubmit } = methods;

  const submit = async (data: any) => {
    // console.log(data.picture[0]);
    const formData = new FormData();

    for (const key in data) {
      if (key === "picture") {
        formData.append(key, data[key][0]);
      }
      formData.append(key, data[key]);
    }

    const res = await serverNewAlbum(formData);
    console.log("🚀 ~ res", res);
  };
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
          {current === 2 && <AlbumStepTwo />}
          {current === 3 && <AlbumStepThree />}

          {current !== max && (
            <Button click={() => set((p) => p + 1)} type="button">
              Далі
            </Button>
          )}
          {current === max && <Button>Додати альбом</Button>}
        </FormBox>
      </Box>
    </Box>
  );
};
