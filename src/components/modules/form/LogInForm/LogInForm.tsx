import { FC } from "react";

import { Box } from "../../../global/Box";
import { Button } from "../../../global/Button/Button";
import { TextErrorServer } from "../GlobalForm.styled";
import { useAuth, typeSchema } from "../hook/useAuth";
import { FormBox } from "../FormBox/FormBox";
import { InputForm } from "../InputForm/InputForm";

export const LogInForm: FC = () => {
  const { error, errorMessage, methods, onSubmit } = useAuth(typeSchema.LOGIN);

  const { handleSubmit } = methods;

  return (
    <Box>
      {error && <TextErrorServer>{errorMessage}</TextErrorServer>}
      <FormBox methods={methods} submit={handleSubmit(onSubmit)}>
        <InputForm
          title="Nike name"
          inputType="name"
          placeholder="IHdPA"
          name="username"
        />

        <InputForm title="Пароль" inputType="password" name="password" />

        <Button>Увійти</Button>
      </FormBox>
    </Box>
  );
};
