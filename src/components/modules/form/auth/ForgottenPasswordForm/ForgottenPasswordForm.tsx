import { Button } from "components/global/button/Button";
import { ArrowBack } from "components/modules/ArrowBack";
import { AuthTitleForm } from "../AuthTitleForm";
import { FormBox } from "../../../../global/form/FormBox";
import { WrapperAuthForm } from "../../GlobalForm.styled";
import { ETypeUseAuth, useAuth } from "../../hook/useAuth";
import { InputForm } from "components/global/form/InputForm";
import { TextForm } from "../../../../global/form/TextForm";

type Props = {};

export const ForgottenPasswordForm = (props: Props) => {
  const { methods, onSubmit } = useAuth(ETypeUseAuth.LOGIN); // Переробить

  const { handleSubmit } = methods;

  return (
    <WrapperAuthForm>
      <FormBox methods={methods} submit={handleSubmit(onSubmit)} box>
        <ArrowBack />

        <AuthTitleForm header="Відновлення паролю" message />

        <TextForm>
          Введіть ваш Email, який ви використовували для реєстрації. Ви
          отримаєте посилання для скидання паролю.
        </TextForm>

        <InputForm title="Email" inputType="email" name="email" />

        <Button>Змінити патоль</Button>
      </FormBox>
    </WrapperAuthForm>
  );
};
