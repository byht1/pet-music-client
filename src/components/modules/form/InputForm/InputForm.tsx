import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { Input, Label, NameInput, TextError } from "./InputForm.styled";
import { authSchema } from "components/modules/form/typeSchema/authSchema";
import { IAlbumForm } from "../AlbumForm/type";

type Props = {
  inputType: string;
  name:
    | "email"
    | "username"
    | "password"
    | "confirmPassword"
    | "name_album"
    | "group_name"
    | "release_date"
    | "genre"
    | "picture";
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
    register,
    formState: { errors },
  } = useFormContext<authSchema & IAlbumForm>();

  return (
    <Label>
      {title && <NameInput>{title}</NameInput>}
      <Input
        type={inputType}
        {...register(name)}
        placeholder={placeholder}
        value={value}
      />
      <TextError>{errors[name]?.message}</TextError>
    </Label>
  );
};
