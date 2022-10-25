import * as yup from "yup";

export const schema = yup
  .object({
    username: yup.string().required("⚠ Поле обов'язкове для заповнення"),
    password: yup.string().required("⚠ Поле обов'язкове для заповнення"),
  })
  .required();
