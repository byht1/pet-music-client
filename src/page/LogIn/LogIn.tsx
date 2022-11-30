import React from "react";
import { LogInForm } from "components/modules/form/LogInForm/LogInForm";

import { ImgBackground } from "./Login.styled";

export default function LogIn() {
  return (
    <ImgBackground>
      <LogInForm />
    </ImgBackground>
  );
}
