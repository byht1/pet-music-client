import { FC } from "react";

import { ArrowBack } from "components/modules/ArrowBack";
import { AuthText } from "components/modules/form/auth/AuthText";
import { Box } from "components/global/Box";
import { ETypeUseAuth, useAuth } from "../../hook/useAuth";
import { TextErrorServer, WrapperAuthForm } from "../../GlobalForm.styled";
import { FormBox } from "../../../../global/form/FormBox";
import { AuthTitleForm } from "../AuthTitleForm";
import { InputCheckboxForm, InputForm } from "components/global/form/InputForm";
import { Button } from "components/global/button/Button";

export const SingUpForm: FC = () => {
  const { error, errorMessage, methods, onSubmit } = useAuth(
    ETypeUseAuth.SIGNUP
  );

  const { handleSubmit } = methods;

  return (
    <>
      <Box>
        {error && <TextErrorServer>{errorMessage}</TextErrorServer>}
        <WrapperAuthForm>
          <FormBox methods={methods} submit={handleSubmit(onSubmit)} box>
            <ArrowBack />
            <AuthTitleForm header="Новий користувач" />
            <Box display="grid" gridGap="32px">
              <InputForm title="Email" inputType="email" name="email" />

              <InputForm title="Ім’я" inputType="name" name="username" />

              <InputForm title="Пароль" inputType="password" name="password" />
            </Box>

            <InputCheckboxForm
              text="Погоджуюсь з правилами конфідеційності"
              name="roles"
            />

            <Button>Зареєструватися</Button>

            <AuthText
              path="/user/log-in"
              text="Вже маю аккаунт."
              urlText="Увійти"
            />
          </FormBox>
        </WrapperAuthForm>
      </Box>
    </>
  );
};

// display = "flex";
// gridGap = "12px";
// alignItems = "center";
// ml = "auto";
// mr = "auto";

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
