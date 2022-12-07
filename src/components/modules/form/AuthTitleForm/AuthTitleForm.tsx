import { FC } from "react";
import { BsGoogle, BsApple } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

import { ListAuth, Title } from "./AuthTitleForm.styled";
import { Box } from "components/global/Box";
import { Button } from "components/global/button/Button";

type Props = {
  header: string;
  message?: boolean;
};

export const AuthTitleForm: FC<Props> = ({ header, message }) => {
  return (
    <Box display="grid" gridGap="40px">
      <Title>{header}</Title>
      {!message && (
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
      )}
    </Box>
  );
};
