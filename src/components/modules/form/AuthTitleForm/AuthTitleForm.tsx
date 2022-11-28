import { FC } from "react";
import { BsGoogle, BsApple } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

import { Title } from "./AuthTitleForm.styled";
import { Box } from "components/global/Box";

type Props = {
  header: string;
};

export const AuthTitleForm: FC<Props> = ({ header }) => {
  return (
    <Box display="grid" gridGap="40px">
      <Title>{header}</Title>
      <Box display="flex" ml="auto" mr="auto" gridGap="24px">
        <BsGoogle size={40} />
        <BsApple size={40} />
        <FaFacebookF size={40} />
      </Box>
    </Box>
  );
};
