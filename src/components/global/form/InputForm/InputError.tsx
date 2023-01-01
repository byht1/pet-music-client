import { Box } from "components/global/Box";
import { FC } from "react";
import { MdError } from "react-icons/md";
import { TextError } from "./InputForm.styled";

type Props = {
  text?: string | any;
};

export const InputError: FC<Props> = ({ text }) => {
  return (
    <Box
      display="flex"
      gridGap="8px"
      position="absolute"
      top="calc(100% + 7px)"
      left="24px"
    >
      <MdError color="var(--error)" size={20} />
      <TextError>{text}</TextError>
    </Box>
  );
};
