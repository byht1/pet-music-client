import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { Input, Label, TextSpan } from "./CheckboxGenre.styled";

type Props = {
  name: string;
  text: string;
  check: boolean | undefined;
};

export const CheckboxGenre: FC<Props> = ({ name, text, check }) => {
  const { register } = useFormContext();

  return (
    <Label check={check}>
      <TextSpan>{text}</TextSpan>

      <Input type="checkbox" {...register(name)} value={text} />
    </Label>
  );
};
