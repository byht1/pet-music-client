import * as yup from "yup";

export const schemaSingUp = yup
  .object({
    username: yup.string().required("Поле обов'язкове для заповнення"),
    email: yup.string().required("Поле обов'язкове для заповнення"),
    password: yup.string().required("Поле обов'язкове для заповнення"),
    roles: yup.boolean().oneOf([true], "Поле обов'язкове для заповнення"),
    // confirmPassword: yup
    //   .string()
    //   .required("Поле обов'язкове для заповнення")
    //   .oneOf([yup.ref("password"), null], "Пароль не співпадає"),
  })
  .required();
