import { EFormName } from "helper";
import * as yup from "yup";

export const schemaTrackNew = yup
  .object({
    [EFormName.TRACK]: yup.mixed().required(),
    [EFormName.PICTURE]: yup.mixed(),
    [EFormName.NAME]: yup
      .string()
      .min(3, "Мінімальнум три символи")
      .required("⚠ Поле обов'язкове для заповнення"),
    [EFormName.GENRES]: yup
      .array()
      .min(1, "⚠ Поле обов'язкове для заповнення")
      .required("⚠ Поле обов'язкове для заповнення"),
    [EFormName.TAGS]: yup.string(),
    [EFormName.DESCRIPTION]: yup.string(),
    [EFormName.TOALL]: yup.boolean(),
  })
  .required();

// export interface ITrackForm {
//   name: string;
//   author_track: string;
//   date_implementation: string;

//   album: string;
//   text_track: string;
//   genre: string;

//   audio: string;
//   picture: string;
// }
