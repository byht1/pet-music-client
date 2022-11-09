import Select from "react-select";

import { AlbumStepTwo } from "../../AlbumForm/AlbumStepTwo";
import { InputForm } from "../../InputForm";
import { useQuery } from "@tanstack/react-query";
import { serverAlbumUser } from "api/api";

type Props = {};

export const TrackStepTwo = (props: Props) => {
  const { data } = useQuery(["albumUser"], serverAlbumUser);
  console.log("🚀 ~ data", data);
  return (
    <>
      <Select />
      <InputForm title="Текст до трека" inputType="text" name="text_track" />
      <AlbumStepTwo error />
    </>
  );
};
