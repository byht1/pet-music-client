import { FC } from "react";
import { BsGoogle, BsApple } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

import { CrutchBox, ListAuth, Title } from "./AuthTitleForm.styled";
import { Box } from "components/global/Box";
import { Button } from "components/global/button/Button";
import axios from "axios";

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
            <Box position="relative">
              <Button
                disabled
                bg="transparent"
                hoverBg="transparent"
                hoverC="var(--violet)"
                p={false}
              >
                <BsGoogle size={40} />
              </Button>
              <CrutchBox>
                <GoogleOAuthProvider clientId="894802329259-ksrjdmuhasgtdhsbb14ng3vba8ji12l9.apps.googleusercontent.com">
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
                </GoogleOAuthProvider>
              </CrutchBox>
            </Box>
            {/* </GoogleOAuthProvider> */}
          </li>
          <li>
            <Button
              disabled
              bg="transparent"
              hoverBg="transparent"
              hoverC="var(--violet)"
              p={false}
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
            >
              <FaFacebookF size={40} />
            </Button>
          </li>
        </ListAuth>
      )}
    </Box>
  );
};
