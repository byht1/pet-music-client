import { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Input, Label, NameInput, TextError } from "./InputForm.styled";
import { authSchema } from "components/modules/form/typeSchema/authSchema";
import { IAlbumForm } from "../AlbumForm/type";
import { ITrackForm } from "../TrackForm/type";

type Props = {
  inputType: string;
  name:
    | "email"
    | "username"
    | "password"
    | "name_album"
    | "group_name"
    | "release_date"
    | "genre"
    | "picture"
    | "name"
    | "author_track"
    | "date_implementation"
    | "album"
    | "text_track"
    | "audio";
  title?: string;
  placeholder?: string;
  value?: string;
};

export const InputForm: FC<Props> = ({
  inputType,
  name,
  placeholder = "",
  title,
  value,
}) => {
  const {
    watch,
    register,
    formState: { errors },
  } = useFormContext<authSchema & IAlbumForm & ITrackForm>();
  const [isFocus, setIsFocus] = useState(true);

  const notFocus = () => {
    const isName = watch(name);

    setIsFocus(isName?.length === 0);
  };

  return (
    <Label onBlur={notFocus}>
      {title && isFocus && <NameInput>{title}</NameInput>}
      <Input
        onFocus={() => setIsFocus(false)}
        type={inputType}
        {...register(name)}
        placeholder={placeholder}
        value={value}
      />
      <TextError>{errors[name]?.message}</TextError>
    </Label>
  );
};
