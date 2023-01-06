import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { BsGoogle } from "react-icons/bs";

import { Box } from "components/global/Box";
import { Button } from "components/global/button/Button";
import { CrutchBox } from "./Google.styled";
import { ETypeUseAuth, useAuth } from "components/modules/form/hook/useAuth";

export const Google = () => {
  const { onSubmit } = useAuth(ETypeUseAuth.GOOGLE);
  return (
    <Box position="relative">
      <Button
        disabled
        bg="transparent"
        hoverBg="transparent"
        hoverC="var(--violet)"
        p={false}
        type="button"
      >
        <BsGoogle size={40} />
      </Button>
      <CrutchBox>
        <GoogleOAuthProvider clientId="894802329259-ksrjdmuhasgtdhsbb14ng3vba8ji12l9.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              if (!credentialResponse.credential) return;

              await onSubmit({
                token: credentialResponse.credential,
                username: "",
                password: "",
              });
            }}
            onError={() => {
              console.log("Login Failed");
              // Server error
            }}
          />
        </GoogleOAuthProvider>
      </CrutchBox>
    </Box>
  );
};
