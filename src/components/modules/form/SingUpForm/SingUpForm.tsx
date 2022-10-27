import { FC } from "react";

import { Box } from "../../../global/Box";
import { Button } from "../../../global/Button/Button";
import { Form, Label, NameInput } from "./SingUpForm.styled";
import { TextError, TextErrorServer } from "../GlobalForm.styled";
import { useAuth, typeSchema } from "../hook/useAuth";

export const SingUpForm: FC = () => {
  const {
    error,
    errorMessage,
    form: { register, handleSubmit, errors },
    onSubmit,
  } = useAuth(typeSchema.SIGNUP);

  return (
    <>
      <Box>
        {error && <TextErrorServer>{errorMessage}</TextErrorServer>}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>
            <NameInput>Nike name</NameInput>
            <input type="name" {...register("username")} placeholder="IHdPA" />
            <TextError>{errors.username?.message}</TextError>
          </Label>

          <Label>
            <NameInput>Email</NameInput>
            <input
              type="email"
              {...register("email")}
              placeholder="IHdPA@gmail.com"
            />
            <TextError>{errors.email?.message}</TextError>
          </Label>

          <Label>
            <NameInput>Пароль</NameInput>
            <input type="password" {...register("password")} />
            <TextError>{errors.password?.message}</TextError>
          </Label>

          <Label>
            <NameInput>Підтвердження пароля</NameInput>
            <input type="password" {...register("confirmPassword")} />
            <TextError>{errors.confirmPassword?.message}</TextError>
          </Label>

          <Button>Створити акаунт</Button>
        </Form>
      </Box>
    </>
  );
};

// Redux

// const [post] = useNewUserMutation();
// const {
//   register,
//   handleSubmit,
//   formState: { errors },
// } = useForm<IFormInputs>({
//   resolver: yupResolver(schema),
// });

// const onSubmit = async (data: IFormInputs) => {
//   delete data.confirmPassword;
//   const response = await post(data);
//   console.log("🚀 ~ response", response);
// };
