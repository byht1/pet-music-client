import * as yup from "yup";

export const schemaAlbumNew = yup
  .object({
    name_album: yup.string().required("⚠ Поле обов'язкове для заповнення"),
    group_name: yup.string().required("⚠ Поле обов'язкове для заповнення"),
    release_date: yup.string().required("⚠ Поле обов'язкове для заповнення"),
    genre: yup.array().required("⚠ Поле обов'язкове для заповнення"),
    // picture: yup.object().required("⚠ Поле обов'язкове для заповнення"),
  })
  .required();

// ["name_album", "group_name", "release_date"];
