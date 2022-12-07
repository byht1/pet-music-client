import { FC, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { BsCheckLg } from "react-icons/bs";

import {
  Checkbox,
  InputCheckbox,
  Label,
  Text,
  TextError,
} from "./InputForm.styled";
import { Box } from "components/global/Box";
import { authSchema } from "../typeSchema/authSchema";
import { InputError } from "./InputError";

type Props = {
  name: "roles";
  text: string;
};

export const InputCheckboxForm: FC<Props> = ({ name, text }) => {
  const {
    watch,
    register,
    formState: { errors },
  } = useFormContext<authSchema>();
  const [isChecked, setIsChecked] = useState(false);
  const obs = watch(name);
  const error = errors[name];

  useEffect(() => {
    setIsChecked(() => (obs ? true : false));
  }, [obs]);

  return (
    <>
      <Label ml>
        <Box p="3px" width="24px" height="24px">
          <Checkbox check={isChecked}>
            {isChecked && <BsCheckLg color="var(--background)" />}
          </Checkbox>
        </Box>
        <InputCheckbox type="checkbox" {...register(name)} />
        <Text>{text}</Text>
        {error && <InputError text={error?.message} />}
      </Label>
    </>
  );
};