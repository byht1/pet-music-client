import { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Label, NameInput, Textarea } from "./InputForm.styled";

type Props = {
  name: string;
  title: string;

  mb?: number;
  ml?: number;
  mr?: number;
  mt?: number;
};

export const TextareaForm: FC<Props> = ({ name, title, ...props }) => {
  const [isFocus, setIsFocus] = useState(true);
  const { register, watch } = useFormContext();
  const isName = watch(name);

  const notFocus = () => {
    setIsFocus(isName?.length === 0);
  };
  return (
    <Label onBlur={notFocus} {...props}>
      {title && isFocus && <NameInput>{title}</NameInput>}
      <Textarea
        length={isName}
        onFocus={() => setIsFocus(false)}
        {...register(name)}
      ></Textarea>
    </Label>
  );
};
