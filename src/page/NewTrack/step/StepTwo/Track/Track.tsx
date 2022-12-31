import { Box } from "components/global/Box";
import { ButtonClose } from "components/global/button/ButtonClose/ButtonClose";
import { InputForm } from "components/global/form/InputForm";
import { Text } from "components/global/Text";
import { EFormName } from "helper";
import { Camera, MusicPrivy } from "img/form";
import { useLayoutEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";
import { RClick } from "type";
import { InputFile, LabelFile } from "../../StepOne/StepOne.styled.";
import { HiPencil } from "react-icons/hi";
import {
  ButtonPen,
  CheatButton,
  DropZone,
  ImgPrivy,
  LabelBox,
  PermalinkBox,
  PermalinkInput,
  PermalinkLink,
  Placeholder,
} from "./Track.styled";

//

type TPicturePrivy = string | ArrayBuffer | null | undefined;

export const Track = () => {
  const [isFocus, setIsFocus] = useState(true);
  const [permalinkDisabled, setPermalinkDisabled] = useState(true);
  const { register, setValue, getValues, reset, setFocus } = useFormContext();
  const [picturePrivy, setPicturePrivy] = useState<TPicturePrivy>();
  const { getRootProps, getInputProps, isDragAccept } = useDropzone({
    accept: { "image/*": [".png", ".jpg", ".svg"] },
    onDrop: (files) => change(files[0]),
    disabled: false,
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

  const notFocus = () => {
    const value = getValues(EFormName.PERMALINK);
    setIsFocus(value?.length === 0);
    setPermalinkDisabled(true);
  };

  const focus = () => {
    setPermalinkDisabled(false);

    setTimeout(() => {
      setFocus(EFormName.PERMALINK);
      setIsFocus(false);
    });
  };

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
            {...register(EFormName.PICTURE)}
            {...getInputProps()}
          />
        </LabelFile>
      </Box>
      <div>
        <InputForm title="Назва" inputType="text" name={EFormName.NAME} />
        <PermalinkBox>
          <Text family="roboto" weight={700} size={16} lh={24}>
            Постійне посилання
          </Text>
          <Box
            mt="12px"
            display="grid"
            gridTemplateColumns="auto 1fr auto"
            gridGap="16px"
            alignItems="center"
          >
            <PermalinkLink>
              https://byht1.github.io/pet-music-client/track/
            </PermalinkLink>

            <LabelBox onBlur={notFocus}>
              {isFocus && <Placeholder>11bf5b37-e0b8-42e0-8dcf</Placeholder>}
              <PermalinkInput
                type="text"
                {...register(EFormName.PERMALINK)}
                disabled={permalinkDisabled}
              />
            </LabelBox>
            <ButtonPen onClick={focus} type="button">
              <HiPencil size={18} />
            </ButtonPen>
          </Box>
        </PermalinkBox>
      </div>
    </Box>
  );
};
