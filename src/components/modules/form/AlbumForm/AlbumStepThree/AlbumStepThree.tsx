import React, { useState, useEffect } from "react";
import { InputForm } from "../../InputForm/InputForm";
import { useFormContext } from "react-hook-form";
import { TextError } from "../../InputForm/InputForm.styled";
import { IAlbumForm } from "../type";
export const AlbumStepThree = () => {
  const [file, setFile] = useState<any>("");
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<IAlbumForm>();
  const watchAllFields: IAlbumForm = watch();

  useEffect(() => {
    if (!watchAllFields.picture?.length) return;

    const change = () => {
      const file: any = watchAllFields.picture["0"];
      const reader = new FileReader();

      reader.onload = (event: ProgressEvent<FileReader>) => {
        const src = event.target?.result;
        setFile(src);
      };

      reader.readAsDataURL(file);
    };

    change();

    return () => change();
  }, [watchAllFields]);

  return (
    <>
      <label>
        <input type="file" accept="image/jpeg" {...register("picture")} />
        <TextError>{errors.picture?.message}</TextError>
      </label>
      {file && <img src={file} alt="photo" />}
    </>
  );
};

// onChange = { change };
