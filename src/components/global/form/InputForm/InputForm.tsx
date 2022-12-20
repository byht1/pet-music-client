import React, { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";

import { Input, Label, NameInput, ShowBox } from "./InputForm.styled";
import { authSchema } from "components/modules/form/typeSchema/authSchema";
import { InputError } from "./InputError";
import { IAlbumForm } from "components/modules/form/old/AlbumForm/type";
import { ITrackForm } from "components/modules/form/old/TrackForm/type";

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
  const [show, setShow] = useState(false);
  const [type, setType] = useState(inputType);
  const isName = watch(name);
  const error = errors[name];

  const notFocus = () => {
    setIsFocus(isName?.length === 0);
  };

  const passwordShow = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setType(show ? inputType : "text");
    setShow(() => !show);
  };

  return (
    <Label onBlur={notFocus}>
      {title && isFocus && <NameInput>{title}</NameInput>}
      <Input
        onFocus={() => setIsFocus(false)}
        type={type}
        {...register(name)}
        placeholder={placeholder}
        value={value}
        length={isName}
        error={error}
      />
      {inputType === "password" && (
        <ShowBox onClick={passwordShow}>
          {show ? (
            <IoMdEye color="var(--border)" size={24} />
          ) : (
            <IoMdEyeOff color="var(--border)" size={24} />
          )}
        </ShowBox>
      )}
      {error && <InputError text={error?.message} />}
    </Label>
  );
};
