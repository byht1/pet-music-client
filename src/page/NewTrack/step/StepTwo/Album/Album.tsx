import { useMutation } from "@tanstack/react-query";
import { newAlbum } from "api";
import { Box } from "components/global/Box";
import { InputForm } from "components/global/form/InputForm";
import { EFormName } from "helper";
import React from "react";
import { EQueryKey } from "type";
import { ButtonOption } from "../../ButtonOption";

export const Album = () => {
  const { mutateAsync } = useMutation({
    mutationKey: [EQueryKey.ALBUM, EQueryKey.TRACK],
    mutationFn: newAlbum,
  });
  const click = async (data: any) => {
    console.log("🚀  data", data);
    const data2 = await newAlbum(data);
    console.log("🚀  data2", data2);
  };
  return (
    <div>
      <Box width="376px" mt="60px">
        <InputForm
          title="Артист або назва групи"
          inputType="text"
          name={EFormName.ARTIST}
        />
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        gridGap="24px"
        mt="79px"
      >
        <InputForm
          width="100%"
          title="Назва альбому"
          inputType="text"
          name={EFormName.ALBUM_NAME}
        />
        <InputForm
          width="100%"
          title="Лейбл"
          inputType="text"
          name={EFormName.LABEL}
        />
        <InputForm width="100%" inputType="date" name={EFormName.DATE} />
      </Box>
      <Box pb="433px" display="flex" justifyContent="end">
        <ButtonOption buttonType="submit" onClick={click} />
      </Box>
    </div>
  );
};
