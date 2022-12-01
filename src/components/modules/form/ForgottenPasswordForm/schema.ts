import * as yup from "yup";

export const schemaForgotten = yup
  .object({
    email: yup.string().required("Поле обов'язкове для заповнення"),
  })
  .required();
