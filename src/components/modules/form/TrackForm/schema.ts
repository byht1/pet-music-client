import * as yup from "yup";

export const schemaTrackNew = yup
  .object({
    name: yup.string().required("⚠ Поле обов'язкове для заповнення"),
    author_track: yup.string().required("⚠ Поле обов'язкове для заповнення"),
    date_implementation: yup
      .string()
      .required("⚠ Поле обов'язкове для заповнення"),
    album: yup.string().required("⚠ Поле обов'язкове для заповнення"),
    text_track: yup.string().required("⚠ Поле обов'язкове для заповнення"),
    genre: yup.array().required("⚠ Поле обов'язкове для заповнення"),

    // picture: yup.object().required("⚠ Поле обов'язкове для заповнення"),
    // audio: yup.object().required("⚠ Поле обов'язкове для заповнення"),
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
