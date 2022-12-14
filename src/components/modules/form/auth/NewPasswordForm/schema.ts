import * as yup from "yup";

export const schemaNewPassword = yup
  .object({
    password: yup.string().required("Поле обов'язкове для заповнення"),
  })
  .required();
