import { Button } from "components/global/button/Button";
import { ArrowBack } from "components/modules/ArrowBack";
import { AuthTitleForm } from "../AuthTitleForm";
import { FormBox } from "components/global/form/FormBox";
import { WrapperAuthForm } from "../../GlobalForm.styled";
import { InputForm } from "components/global/form/InputForm";
import { TextForm } from "components/global/form/TextForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaForgotten } from "./schema";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { forgottenPassword } from "api";
import { toast } from "react-toastify";
import { useAppDispatch } from "redux/hook";
import { loaderReducer } from "redux/auth";
import { AxiosError } from "axios";

export const ForgottenPasswordForm = () => {
  const dispatch = useAppDispatch();
  const methods = useForm<{ email: string }>({
    resolver: yupResolver(schemaForgotten),
  });
  const { mutateAsync } = useMutation<
    void,
    AxiosError<string[], any>,
    { email: string },
    unknown
  >({
    mutationFn: (data) => {
      dispatch(loaderReducer(true));
      return forgottenPassword(data);
    },
    onSuccess: () => {
      toast.success(`Інструкція по зміні пароля відправлена на вказану пошту`);
    },
    onError: (error: any) => {
      toast.error(`${error.response.data.message}`);
    },
    onSettled: () => dispatch(loaderReducer(false)),
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: { email: string }) => {
    console.log("🚀  data", data);
    await mutateAsync(data);
  };

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

        <Button>Далі</Button>
      </FormBox>
    </WrapperAuthForm>
  );
};
