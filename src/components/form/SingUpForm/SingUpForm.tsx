import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box } from "../../global/Box";
import { Button } from "../../global/Button/Button";
import { Form, Label, NameInput } from "./SingUpForm.styled";
import { schema } from "./schema";
import { TextError } from "./../GlobalForm.styled";

interface IFormInputs {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export const SingUpForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormInputs) => {
    delete data.confirmPassword;
    console.log(data);
  };

  return (
    <Box>
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
  );
};
