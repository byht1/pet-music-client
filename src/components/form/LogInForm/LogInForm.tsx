import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box } from "../../global/Box";
import { Button } from "../../global/Button/Button";
import { schema } from "../LogInForm/schema";
import { Form, Label, NameInput } from "./LogInForm.styled";
import { TextError } from "../GlobalForm.styled";

interface IFormInputs {
  username: string;
  password: string;
}

export const LogInForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormInputs) => {
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
          <NameInput>Пароль</NameInput>
          <input type="password" {...register("password")} />
          <TextError>{errors.password?.message}</TextError>
        </Label>

        <Button>Увійти</Button>
      </Form>
    </Box>
  );
};
