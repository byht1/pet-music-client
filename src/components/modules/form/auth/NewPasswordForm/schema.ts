import * as yup from "yup";

export const schemaNewPassword = yup
  .object({
    password: yup
      .string()
      .required("Ви не вказали новий пароль")
      .matches(
        /(?=.*[0-9])(?=.*[!@#$%^&*_])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*_]{7,}/g,
        "Не валідний пароль"
      ),
  })
  .required();
