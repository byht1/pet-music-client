import { FC, ReactFragment, ReactNode } from "react";
import { FormProvider } from "react-hook-form";
import { BoxForm, Form } from "./FormBox.styled";

type Props = {
  methods: any;
  submit: () => void;
  children: ReactFragment | ReactNode;

  box?: boolean;
};

export const FormBox: FC<Props> = ({ submit, methods, children, box }) => {
  return (
    <FormProvider {...methods}>
      <Form onSubmit={submit}>
        {box && <BoxForm>{children}</BoxForm>}
        {!box && children}
      </Form>
    </FormProvider>
  );
};
