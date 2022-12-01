import * as yup from "yup";

export const schemaLogIn = yup
  .object({
    email: yup.string().required("Поле обов'язкове для заповнення"),
    password: yup.string().required("Поле обов'язкове для заповнення"),
    roles: yup.boolean().oneOf([true], "Поле обов'язкове для заповнення"),
  })
  .required();
