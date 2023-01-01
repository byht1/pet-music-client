import { FC } from "react";
import { BsGoogle, BsApple } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

import { ListAuth, Title } from "./AuthTitleForm.styled";
import { Box } from "components/global/Box";
import { Button } from "components/global/button/Button";
import axios from "axios";

type Props = {
  header: string;
  message?: boolean;
};

export const AuthTitleForm: FC<Props> = ({ header, message }) => {
  const onClick = async () => {
    console.log("START");
    const { data } = await axios.get("http://localhost:5000/api/users/test", {
      withCredentials: true,
    });
    console.log("🚀  data", data);
  };

  const redirectToGoogleSSO = async () => {
    let timer: NodeJS.Timeout | null = null;
    const googleLoginURL = "http://localhost:5000/api/users/google/login";
    const newWindow = window.open(
      googleLoginURL,
      "_blank",
      "width=500,height=600"
    );

    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          console.log("Yay we're authenticated");
          onClick();
          if (timer) clearInterval(timer);
        }
      }, 500);
    }
  };

  return (
    <Box display="grid" gridGap="40px">
      {/* <a href="http://localhost:5000/api/users/google/login">
        http://localhost:5000/api/users/google/login
      </a> */}
      <Title>{header}</Title>
      {!message && (
        <ListAuth>
          <li>
            <Button
              click={redirectToGoogleSSO}
              // disabled
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
