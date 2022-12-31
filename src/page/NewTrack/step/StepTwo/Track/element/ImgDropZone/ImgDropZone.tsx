import { Box } from "components/global/Box";
import { ButtonClose } from "components/global/button/ButtonClose/ButtonClose";
import { Text } from "components/global/Text";
import { EFormName } from "helper";
import {
  InputFile,
  LabelFile,
} from "page/NewTrack/step/StepOne/StepOne.styled.";
import React, { useLayoutEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";
import { RClick } from "type";
import { Camera, MusicPrivy } from "img/form";
import { CheatButton, DropZone, ImgPrivy } from "./ImgDropZone.styled";

type TPicturePrivy = string | ArrayBuffer | null | undefined;

export const ImgDropZone = () => {
  const { register, setValue, getValues, reset } = useFormContext();
  const [picturePrivy, setPicturePrivy] = useState<TPicturePrivy>();
  const { getRootProps, getInputProps, isDragAccept } = useDropzone({
    accept: { "image/*": [".png", ".jpg", ".svg"] },
    onDrop: (files) => change(files[0]),
    disabled: !!picturePrivy,
  });

  useLayoutEffect(() => {
    const file = getValues(EFormName.PICTURE);
    if (!file) return;
    change(file);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const close = (e: RClick) => {
    e.stopPropagation();

    reset((formValues) => ({
      ...formValues,
      [EFormName.PICTURE]: undefined,
    }));
    setPicturePrivy(undefined);
  };

  function change<T extends File>(file: T) {
    const reader = new FileReader();

    reader.onload = (event: ProgressEvent<FileReader>) => {
      const src = event.target?.result;
      setPicturePrivy(src);
    };

    reader.readAsDataURL(file);

    setValue(EFormName.PICTURE, file);
  }

  return (
    <Box {...getRootProps({ isDragAccept })}>
      {picturePrivy ? (
        <Box position="relative" p="20px">
          <ButtonClose click={close} position />
          <ImgPrivy src={picturePrivy?.toString()} alt="Фото вашого треку" />
        </Box>
      ) : (
        <DropZone>
          <MusicPrivy />
          <CheatButton>
            <Camera />
            <Text family="roboto" size={16} lh={24}>
              Завантажити фото
            </Text>
          </CheatButton>
        </DropZone>
      )}
      <LabelFile>
        <InputFile
          type="file"
          {...register(EFormName.PICTURE)}
          {...getInputProps()}
        />
      </LabelFile>
    </Box>
  );
};
