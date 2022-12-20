import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { IAlbumForm } from "../type";
import { TextError } from "components/global/form/InputForm/InputForm.styled";
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
