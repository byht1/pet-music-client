import { FC } from "react";
import { BsGoogle, BsApple } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

import { ListAuth, Title } from "./AuthTitleForm.styled";
import { Box } from "components/global/Box";
import { Button } from "components/global/Button";

type Props = {
  header: string;
};

export const AuthTitleForm: FC<Props> = ({ header }) => {
  return (
    <Box display="grid" gridGap="40px">
      <Title>{header}</Title>
      <ListAuth>
        <li>
          <Button
            disabled
            bg="transparent"
            hoverBg="transparent"
            hoverC="var(--violet)"
          >
            <BsGoogle size={40} />
          </Button>
        </li>
        <li>
          <Button
            disabled
            bg="transparent"
            hoverBg="transparent"
            hoverC="var(--violet)"
          >
            <BsApple size={40} />
          </Button>
        </li>
        <li>
          <Button
            disabled
            bg="transparent"
            hoverBg="transparent"
            hoverC="var(--violet)"
          >
            <FaFacebookF size={40} />
          </Button>
        </li>
      </ListAuth>
    </Box>
  );
};
