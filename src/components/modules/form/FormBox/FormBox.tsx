import React, { FC, ReactFragment } from "react";
import { FormProvider } from "react-hook-form";
import { Form } from "./FormBox.styled";

type Props = {
  methods: any;
  submit: () => void;
  children: ReactFragment;
};

export const FormBox: FC<Props> = ({ submit, methods, children }) => {
  return (
    <FormProvider {...methods}>
      <Form onSubmit={submit}>{children}</Form>
    </FormProvider>
  );
};
