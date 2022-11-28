import React from "react";
import { Box } from "components/global/Box";
import { SingUpForm } from "components/modules/form/SingUpForm/SingUpForm";
import { ImgBackground } from "./SingUp.styled";

export default function SingUp() {
  return (
    <ImgBackground>
      <SingUpForm />
    </ImgBackground>
  );
}
