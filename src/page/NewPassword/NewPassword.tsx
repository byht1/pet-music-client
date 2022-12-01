import { NewPasswordForm } from "components/modules/form/NewPasswordForm";
import { LogUserImgBackground } from "page/LogIn/Login.styled";
import React from "react";

export default function NewPassword() {
  return (
    <LogUserImgBackground>
      <NewPasswordForm />
    </LogUserImgBackground>
  );
}
