import { FC, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { BsCheckLg } from "react-icons/bs";

import { Checkbox, InputCheckbox, Label, Text } from "./InputForm.styled";
import { Box } from "components/global/Box";
import { InputError } from "./InputError";
import { authSchema } from "components/modules/form/typeSchema/authSchema";

type Props = {
  name: "roles";
  text: string;
  isError?: boolean;
};

export const InputCheckboxForm: FC<Props> = ({
  name,
  text,
  isError = true,
}) => {
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
        {isError && error && <InputError text={error?.message} />}
      </Label>
    </>
  );
};
