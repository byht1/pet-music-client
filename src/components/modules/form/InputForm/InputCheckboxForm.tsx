import React, { FC, useState, useEffect } from "react";
import throttle from "lodash.throttle";
import { useFormContext, Controller } from "react-hook-form";
import { Checkbox, InputCheckbox, Label, Text } from "./InputForm.styled";
import { Box } from "components/global/Box";

type Props = {
  name: string;
  text: string;
};

export const InputCheckboxForm: FC<Props> = ({ name, text }) => {
  const [isChecked, setIsChecked] = useState(false);
  const {
    watch,
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  //   useEffect(() => {
  //     setValue(name, isChecked);
  //     console.log(isChecked);
  //   }, [isChecked, name, setValue]);

  const click = (value: boolean) => {
    console.log("🚀 ~ value", value);
    setValue(name, value);
    setIsChecked(value);
  };

  return (
    <>
      <Label ml onClick={() => throttle(() => click(!isChecked), 500)}>
        <Box p="3px" width="24px" height="24px">
          <Checkbox />
        </Box>
        <InputCheckbox type="checkbox" {...register(name)} />
        <Text>{text}</Text>
      </Label>
    </>
  );
};
