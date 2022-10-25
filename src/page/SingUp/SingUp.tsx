import React from "react";
import { Box } from "components/global/Box";
import { SingUpForm } from "components/form/SingUpForm/SingUpForm";

export default function SingUp() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      pt={5}
      pb={5}
    >
      <h2>Регистрація</h2>
      <SingUpForm />
    </Box>
  );
}
