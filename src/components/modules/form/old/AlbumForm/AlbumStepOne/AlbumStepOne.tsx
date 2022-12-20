import { InputForm } from "components/global/form/InputForm";

type Props = {};

export const AlbumStepOne = (props: Props) => {
  return (
    <>
      <InputForm title="Назва альбому" inputType="name" name="name_album" />
      <InputForm title="Назва групи" inputType="name" name="group_name" />
      <InputForm title="Дата релізу" inputType="date" name="release_date" />
    </>
  );
};
