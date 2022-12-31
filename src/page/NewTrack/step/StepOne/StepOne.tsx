import { Box } from "components/global/Box";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { DropZone, InputFile, LabelFile, TextFile } from "./StepOne.styled.";
import { Title2 } from "components/global/Title";
import { Button } from "components/global/button/Button";
import { ButtonClose } from "components/global/button/ButtonClose/ButtonClose";
import { SoundQuality } from "components/modules/SoundQuality";
import { IsTrackToAll } from "components/modules/IsTrackToAll";
import { EFormName } from "helper";

export const schemaAlbumNew = yup
  .object({
    track__link: yup.string().required("Поле обов'язкове для заповнення"),
    toAllTrack: yup.boolean(),
    // picture: yup.object().required("Поле обов'язкове для заповнення"),
  })
  .required();

export const StepOne = () => {
  const { register, setValue, getValues, reset } = useFormContext();
  const value = getValues(EFormName.TRACK);
  const [isDisabled, setIsDisabled] = useState(false || !!value);

  const { getRootProps, getInputProps, isDragAccept } = useDropzone({
    accept: { "audio/*": [".mp3", ".mp4", ".flac", ".wav", ".alac", ".aiff"] },
    onDrop: (files) => change(files),
    disabled: isDisabled,
  });
  const navigate = useNavigate();

  function change<T extends File>(files: T[]) {
    setValue(EFormName.TRACK, files[0]);
    setIsDisabled(true);
  }

  const click = () => {
    if (!isDisabled) {
      return;
    }
    navigate("step2");
  };

  const closeFile = () => {
    reset((formValues) => ({
      ...formValues,
      [EFormName.TRACK]: undefined,
    }));
    setIsDisabled(false);
  };

  return (
    <DropZone {...getRootProps({ isDragAccept })}>
      <Title2>Перетягніть сюди свої треки та альбоми</Title2>
      {isDisabled && (
        <Box
          mt="48px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          gridGap="10px"
        >
          <TextFile>{value?.name}</TextFile>
          <ButtonClose click={closeFile} />
        </Box>
      )}
      <Button
        w="212px"
        mt={isDisabled ? 48 : 120}
        type="button"
        // disabled={!isDisabled}
        click={click}
      >
        {isDisabled ? "Далі" : "Завантажити з ПК"}
      </Button>
      <IsTrackToAll />
      <LabelFile>
        <InputFile
          type="file"
          {...register(EFormName.TRACK)}
          {...getInputProps()}
        />
      </LabelFile>
      <SoundQuality />
    </DropZone>
  );
};
