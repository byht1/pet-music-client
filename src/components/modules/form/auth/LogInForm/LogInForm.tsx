import { FC } from "react";

// import { Box } from "../../../global/Box";
// import { Button } from "../../../global/button/Button/Button";
// import { TextErrorServer, WrapperAuthForm } from "../GlobalForm.styled";
// import { useAuth, typeSchema } from "../hook/useAuth";
// import { FormBox } from "../FormBox/FormBox";
// import { InputForm } from "../InputForm/InputForm";
// import { AuthTitleForm } from "../auth/AuthTitleForm";
import { ArrowBack } from "components/modules/ArrowBack";
import { AuthText } from "components/modules/form/auth/AuthText";
import { Box } from "components/global/Box";
import { TextErrorServer, WrapperAuthForm } from "../../GlobalForm.styled";
import { FormBox } from "../../FormBox";
import { AuthTitleForm } from "../AuthTitleForm";
import { InputCheckboxForm, InputForm } from "../../InputForm";
import { Button } from "components/global/button/Button";
import { typeSchema, useAuth } from "../../hook/useAuth";
// import { InputCheckboxForm } from "../InputForm";

export const LogInForm: FC = () => {
  const { error, errorMessage, methods, onSubmit } = useAuth(typeSchema.LOGIN);

  const { handleSubmit } = methods;
  return (
    <Box>
      {error && <TextErrorServer>{errorMessage}</TextErrorServer>}
      <WrapperAuthForm>
        <FormBox methods={methods} submit={handleSubmit(onSubmit)} box>
          <ArrowBack />

          <AuthTitleForm header="Увійти в кабінет" />

          <InputForm title="Email" inputType="email" name="email" />

          <InputForm title="Пароль" inputType="password" name="password" />

          <InputCheckboxForm text="Залишитася в мережі" name="roles" />

          <Button>Увійти</Button>

          <AuthText path="/user/forgotten" urlText="Я забув свій пароль" />

          <AuthText
            path="/user/sing-up"
            text="Не маю реєстрації."
            urlText="Зареєструватися"
          />
        </FormBox>
      </WrapperAuthForm>
    </Box>
  );
};
