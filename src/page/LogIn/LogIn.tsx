import React from "react";
import { LogInForm } from "components/form/LogInForm/LogInForm";
import { Box } from "components/global/Box";

export default function LogIn() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      pt={5}
      pb={5}
    >
      <h2>Авторизація</h2>
      <LogInForm />
    </Box>
  );
}
