import { FC } from "react";
import { BsGoogle, BsApple } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

import { ListAuth, Title } from "./AuthTitleForm.styled";
import { Box } from "components/global/Box";
import { Button } from "components/global/button/Button";
// import {
//   GoogleLogin,
//   GoogleOAuthProvider,
//   useGoogleLogin,
// } from "@react-oauth/google";
import axios from "axios";

type Props = {
  header: string;
  message?: boolean;
};

//"http://localhost:5000/api/users/test"
//"http://localhost:5000/api/users/google/login"

export const AuthTitleForm: FC<Props> = ({ header, message }) => {
  const login = useGoogleLogin({
    flow: "implicit",
    onSuccess: async (credentialResponse) => {
      console.log("🚀  credentialResponse", credentialResponse);
      const response = await axios.post(
        "http://localhost:5000/api/users/google/auth",
        {
          token: credentialResponse,
        }
      );
      const data = response.data;
      console.log("🚀  data", data);
    },
    onError: () => console.log("error"),
    scope: "email",
  });

  // const login = useGoogleLogin({
  //   onSuccess: (codeResponse) => console.log(codeResponse),
  //   // flow: "auth-code",0.

  // });

  return (
    <Box display="grid" gridGap="40px">
      <Title>{header}</Title>
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          console.log("🚀  credentialResponse", credentialResponse);
          const response = await axios.post(
            "http://localhost:5000/api/users/google/auth",
            {
              token: credentialResponse,
            }
          );
          const data = response.data;
          console.log("🚀  data", data);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />

      <button type="button" onClick={() => login()}>
        111111111111111
      </button>
      {!message && (
        <ListAuth>
          <li>
            <Button
              click={() => login()}
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
