import { FC } from "react";

import { Box } from "../../global/Box";
import { Button } from "../../global/Button/Button";
import { Form, Label, NameInput } from "./LogInForm.styled";
import { TextError, TextErrorServer } from "../GlobalForm.styled";
import { useAuth, typeSchema } from "../hook/useAuth";

export const LogInForm: FC = () => {
  const {
    error,
    form: { register, handleSubmit, errors },
    onSubmit,
  } = useAuth(typeSchema.LOGIN);

  return (
    <Box>
      {error && <TextErrorServer>{error}</TextErrorServer>}
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
