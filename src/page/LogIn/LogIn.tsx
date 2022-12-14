import { LogInForm } from "components/modules/form/auth/LogInForm/LogInForm";

import { LogUserImgBackground } from "./Login.styled";

export default function LogIn() {
  return (
    <LogUserImgBackground>
      <LogInForm />
    </LogUserImgBackground>
  );
}
