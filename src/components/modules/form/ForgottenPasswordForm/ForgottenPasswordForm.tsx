import { Button } from "components/global/Button";
import { ArrowBack } from "components/modules/ArrowBack";
import { AuthTitleForm } from "../AuthTitleForm";
import { FormBox } from "../FormBox";
import { WrapperAuthForm } from "../GlobalForm.styled";
import { typeSchema, useAuth } from "../hook/useAuth";
import { InputForm } from "../InputForm";
import { TextForm } from "../TextForm";

type Props = {};

export const ForgottenPasswordForm = (props: Props) => {
  const { methods, onSubmit } = useAuth(typeSchema.FORGOT);

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
