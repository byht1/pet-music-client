import { FC } from "react";
import { useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { InputFile, LabelFile } from "./StepOne.styled.";

export const schemaAlbumNew = yup
  .object({
    track__link: yup.string().required("Поле обов'язкове для заповнення"),
    // picture: yup.object().required("Поле обов'язкове для заповнення"),
  })
  .required();

type TLinkTrack = {
  track__link: FileList | null;
};

export const StepOne = () => {
  const { getRootProps, getInputProps } = useDropzone({ noClick: true });
  const navigate = useNavigate();
  const { register, setValue } = useFormContext();

  const change = () => {
    navigate("step2");
  };

  const drop = (e: React.DragEventHandler<HTMLLabelElement>) => {
    console.log("🚀  e", e);
    // setValue("file");
  };

  return (
    <>
      <Basic />
      {/* <LabelFile onChange={change} {...getRootProps()}>
        <InputFile type="file" {...register("file")} {...getInputProps()} />
      </LabelFile> */}
    </>
  );
};

function Basic(props: any) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file: any) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}
