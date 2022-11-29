import { FC } from "react";

import { Box } from "../../../global/Box";
import { Button } from "../../../global/Button/Button";
import {
  ArrowLink,
  TextBox,
  TextDecorate,
  TextErrorServer,
} from "../GlobalForm.styled";
import { useAuth, typeSchema } from "../hook/useAuth";
import { FormBox } from "../FormBox/FormBox";
import { InputCheckboxForm, InputForm } from "../InputForm";
import { AuthTitleForm } from "../AuthTitleForm";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useLocation } from "react-router-dom";

export const SingUpForm: FC = () => {
  const { loader, error, errorMessage, methods, onSubmit } = useAuth(
    typeSchema.SIGNUP
  );

  const { state } = useLocation();

  const { handleSubmit } = methods;

  return (
    <>
      <Box>
        {loader && <p>Loader...</p>}
        {error && <TextErrorServer>{errorMessage}</TextErrorServer>}
        <FormBox methods={methods} submit={handleSubmit(onSubmit)}>
          <ArrowLink to={state?.from ?? "/"}>
            <MdKeyboardArrowLeft size={24} color="var(--border)" />
          </ArrowLink>

          <AuthTitleForm header="Новий користувач" />

          <InputForm title="Email" inputType="email" name="email" />

          <InputForm title="Ім’я" inputType="name" name="username" />

          <InputForm title="Пароль" inputType="password" name="password" />

          <InputCheckboxForm
            text="Погоджуюсь з правилами конфідеційності"
            name="roles"
          />

          <Button>Зареєструватися</Button>

          <TextBox>
            <p>Вже маю аккаунт.</p>
            <TextDecorate to="/log-in">Увійти</TextDecorate>
          </TextBox>
        </FormBox>
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
