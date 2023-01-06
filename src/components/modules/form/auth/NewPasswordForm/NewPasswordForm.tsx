import { Box } from "components/global/Box";
import { Button } from "components/global/button/Button";
import { ArrowBack } from "components/modules/ArrowBack";
import { FormBox } from "../../../../global/form/FormBox";
import { WrapperAuthForm } from "../../GlobalForm.styled";
import { InputForm } from "components/global/form/InputForm";
import { TextForm } from "../../../../global/form/TextForm";
import { AuthTitleForm } from "../AuthTitleForm";
import { ListRequirements, Title } from "./NewPasswordForm.styled";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { schemaNewPassword } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { newPasswordServer } from "api";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

type TBody = { password: string };

export const NewPasswordForm = () => {
  const { id: idLink } = useParams();
  const navigate = useNavigate();
  const methods = useForm<TBody>({
    resolver: yupResolver(schemaNewPassword),
  });
  const { mutateAsync } = useMutation<
    void,
    AxiosError<string[], any>,
    { body: TBody; linkId: string },
    unknown
  >({
    mutationFn: (data) => newPasswordServer(data.body, data.linkId),
    onSuccess: () => {
      toast.success("Пароль успішно змінено");
      navigate("/", { replace: true });
    },
    onError: (error: any) => {
      toast.error(`${error.response.data.message}`);
    },
  });

  const { handleSubmit } = methods;

  const submit = async (data: TBody) => {
    if (!idLink) return;

    await mutateAsync({ body: data, linkId: idLink });
  };

  // idLink.length = 36

  if (!idLink || idLink.length < 30) return <Navigate to={"/"} />;

  return (
    <WrapperAuthForm>
      <FormBox methods={methods} submit={handleSubmit(submit)} box>
        <ArrowBack to="/" />

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
