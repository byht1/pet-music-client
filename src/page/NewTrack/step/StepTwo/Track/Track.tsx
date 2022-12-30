import { Box } from "components/global/Box";
import { ButtonClose } from "components/global/button/ButtonClose/ButtonClose";
import { Text } from "components/global/Text";
import { formName } from "helper";
import { Camera, MusicPrivy } from "img/form";
import { useEffect, useLayoutEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";
import { RClick } from "type";
import { InputFile, LabelFile } from "../../StepOne/StepOne.styled.";
import { CheatButton, DropZone, ImgPrivy } from "./Track.styled";

type TPicturePrivy = string | ArrayBuffer | null | undefined;

export const Track = () => {
  const { register, setValue, getValues, reset } = useFormContext();
  const [picturePrivy, setPicturePrivy] = useState<TPicturePrivy>();
  const { getRootProps, getInputProps, isDragAccept } = useDropzone({
    accept: { "image/*": [".png", ".jpg", ".svg"] },
    onDrop: (files) => change(files[0]),
    disabled: false,
  });

  useLayoutEffect(() => {
    const file = getValues(formName.PICTURE);
    if (!file) return;
    change(file);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const close = (e: RClick) => {
    e.stopPropagation();

    reset((formValues) => ({
      ...formValues,
      [formName.PICTURE]: undefined,
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

    setValue(formName.PICTURE, file);
  }

  return (
    <Box
      mt="60px"
      display="grid"
      gridTemplateColumns="460px 1fr"
      gridGap="24px"
    >
      <Box {...getRootProps({ isDragAccept })}>
        {picturePrivy ? (
          <Box position="relative" p="20px">
            <ButtonClose click={close} />
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
            {...register(formName.PICTURE)}
            {...getInputProps()}
          />
        </LabelFile>
      </Box>
      <div>Two</div>
    </Box>
  );
};
