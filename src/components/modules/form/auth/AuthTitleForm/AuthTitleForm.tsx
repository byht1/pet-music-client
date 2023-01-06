import { FC } from "react";
import { BsApple } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

import { ListAuth, Title } from "./AuthTitleForm.styled";
import { Box } from "components/global/Box";
import { Button } from "components/global/button/Button";
import { Google } from "./Google";

type Props = {
  header: string;
  message?: boolean;
};

//"http://localhost:5000/api/users/test"
//"http://localhost:5000/api/users/google/login"

export const AuthTitleForm: FC<Props> = ({ header, message }) => {
  return (
    <Box display="grid" gridGap="40px">
      <Title>{header}</Title>

      {!message && (
        <ListAuth>
          <li>
            <Google />
          </li>
          <li>
            <Button
              disabled
              bg="transparent"
              hoverBg="transparent"
              hoverC="var(--violet)"
              p={false}
              type="button"
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
              p={false}
              type="button"
            >
              <FaFacebookF size={40} />
            </Button>
          </li>
        </ListAuth>
      )}
    </Box>
  );
};
