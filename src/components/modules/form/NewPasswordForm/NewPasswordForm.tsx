import { Box } from "components/global/Box";
import { Button } from "components/global/button/Button";
import { ArrowBack } from "components/modules/ArrowBack";
import React from "react";
import { AuthTitleForm } from "../AuthTitleForm";
import { FormBox } from "../FormBox";
import { WrapperAuthForm } from "../GlobalForm.styled";
import { typeSchema, useAuth } from "../hook/useAuth";
import { InputForm } from "../InputForm";
import { TextForm } from "../TextForm";
import { ListRequirements, Title } from "./NewPasswordForm.styled";

export const NewPasswordForm = () => {
  const { methods, onSubmit } = useAuth(typeSchema.PASSWORD);

  const { handleSubmit } = methods;

  return (
    <WrapperAuthForm>
      <FormBox methods={methods} submit={handleSubmit(onSubmit)} box>
        <ArrowBack />

        <AuthTitleForm header="Новий пароль" message />

        <TextForm>Придумайте та введіть новий пароль.</TextForm>

        <InputForm title="Пароль" inputType="password" name="password" />

        <Box ml="24px">
          <Title>Пароль повинен містити:</Title>
          <ListRequirements>
            <li>
              <p>Більш, ніж 7-м символів</p>
            </li>
            <li>
              <p>Рядкові літери</p>
            </li>
            <li>
              <p>Заголовні букви</p>
            </li>
            <li>
              <p>Цифри</p>
            </li>
            <li>
              <p>Спеціальні символи</p>
            </li>
          </ListRequirements>
        </Box>

        <Button>Змінити патоль</Button>
      </FormBox>
    </WrapperAuthForm>
  );
};
