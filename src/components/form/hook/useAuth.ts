import { useState } from "react";
import { useStoreUser } from "store/auth/hook";
import { useForm } from "react-hook-form";
import { AxiosErrorResponse } from "api/axiosErrorType";
import { AxiosError } from "axios";
import { schemaLogIn } from "../LogInForm/schema";
import { schemaSingUp } from "../SingUpForm/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { authSchema } from "./../typeSchema/authSchema";
import { useMutation } from "@tanstack/react-query";
import { server } from "api/api";

export const typeSchema = {
  SIGNUP: "signup",
  LOGIN: "login",
};

export const useAuth = (type: string) => {
  const schema = type === typeSchema.LOGIN ? schemaLogIn : schemaSingUp;

  const [error, setError] = useState("");
  const { logIn, user } = useStoreUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<authSchema>({
    resolver: yupResolver(schema),
  });
  const { isLoading, mutateAsync } = useMutation(
    ["user"],
    (data: authSchema) => server.post(`user/${type}`, data),
    {
      onSuccess: (res: any) => {
        logIn(res.data);
        reset();
      },
      onError: (error) => {
        const e = error as AxiosError;
        setError((e.response?.data as AxiosErrorResponse).message);
      },
    }
  );

  const onSubmit = async (data: authSchema) => {
    if (error) {
      setError("");
    }
    delete data.confirmPassword;

    mutateAsync(data);
  };

  return {
    error,
    form: { register, handleSubmit, errors },
    onSubmit,
    isLoading,
    user,
  };
};
