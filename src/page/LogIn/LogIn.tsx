import React from "react";
import { LogInForm } from "components/modules/form/LogInForm/LogInForm";

import { LogUserImgBackground } from "./Login.styled";

export default function LogIn() {
  return (
    <LogUserImgBackground>
      <LogInForm />
    </LogUserImgBackground>
  );
}
