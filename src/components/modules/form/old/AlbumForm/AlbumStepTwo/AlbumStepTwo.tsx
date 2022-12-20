import { FC } from "react";
import { InputForm } from "components/global/form/InputForm";
import { TextError2 } from "components/modules/form/GlobalForm.styled";

const genres = [
  {
    id: "1b7e2199-46c9-49e5-bc9b-57e66e9bd88d",
    name: "Поп музика",
  },
  { id: "28456a1d-7cf0-4de9-b9c9-041520e61936", name: "Рок" },
  { id: "af5484e5-cee7-48bd-bd52-67a4589fd5e8", name: "Хіп Хоп" },
  { id: "b9cb746a-7c8d-43cf-ba3b-9ad6c37ab3b3", name: "Реп" },
  { id: "95bde9f0-2c9d-4691-a71e-f69e57c5af75", name: "R & В" },
  { id: "460a9e27-7a69-4037-8026-b3f483193677", name: "Джаз" },
  {
    id: "1f094694-f05c-4460-a7a8-f6c458aa5583",
    name: "Інструментальна музика",
  },
  {
    id: "69f4de5c-8c44-49f4-a1e9-ab866905e9ea",
    name: "Народна музика",
  },
  {
    id: "1b6076e1-6575-4d55-8ea6-47db424aac36",
    name: "Електронна",
  },
];

type Props = {
  error: boolean;
};

export const AlbumStepTwo: FC<Props> = ({ error }) => {
  return (
    <>
      {error && <TextError2>⚠ Виберіть одне із полів</TextError2>}
      {genres.map(({ name, id }) => {
        return (
          <InputForm
            key={id}
            title={name}
            inputType="checkbox"
            name="genre"
            value={name}
          />
        );
      })}
    </>
  );
};
