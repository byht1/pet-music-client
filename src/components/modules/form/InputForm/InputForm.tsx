import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { Label, NameInput, TextError } from "./InputForm.styled";
import { authSchema } from "components/modules/form/typeSchema/authSchema";

type Props = {
  inputType: string;
  name: "email" | "username" | "password" | "confirmPassword";
  title?: string;
  placeholder?: string;
};

export const InputForm: FC<Props> = ({
  inputType,
  name,
  placeholder = "",
  title,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<authSchema>();

  return (
    <Label>
      {title && <NameInput>{title}</NameInput>}
      <input type={inputType} {...register(name)} placeholder={placeholder} />
      <TextError>{errors[name]?.message}</TextError>
    </Label>
  );
};
