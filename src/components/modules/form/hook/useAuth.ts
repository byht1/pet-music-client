import { useState } from "react";
import { useForm } from "react-hook-form";
import { AxiosErrorResponse } from "api/axiosErrorType";
import { AxiosError } from "axios";
import { schemaLogIn } from "../LogInForm/schema";
import { schemaSingUp } from "../SingUpForm/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { authSchema } from "../typeSchema/authSchema";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "redux/hook";
import { authorization } from "redux/auth";
import {
  getUser,
  getError,
  getErrorMessage,
  getIsLoggedIn,
} from "./../../../../redux/auth/auth-selector";
import { useSelector } from "react-redux";

export const typeSchema = {
  SIGNUP: "signup",
  LOGIN: "login",
};

export const useAuth = (type: string) => {
  const schema = type === typeSchema.LOGIN ? schemaLogIn : schemaSingUp;
  const dispatch = useAppDispatch();
  const user = useSelector(getUser);
  const loader = useSelector(getIsLoggedIn);

  const error = useSelector(getError);
  const errorMessage = useSelector(getErrorMessage);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<authSchema>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: authSchema) => {
    delete data.confirmPassword;
    ч;

    try {
      const res = dispatch(authorization(data));
      if (res.payload) return;
      navigate("/", { replace: true });
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  console.log("🚀 ~ loader", loader);
  return {
    user,
    error,
    errorMessage,
    form: { register, handleSubmit, errors },
    onSubmit,
  };
};

// const { isLoading, mutateAsync } = useMutation(
//   ["user"],
//   (data: authSchema) => serverAuth(type, data),
//   {
//     onSuccess: (data: any) => {
//       logIn(type, data);
//       reset();
//       navigate("/", { replace: true });
//     },
//     onError: (error) => {
//       const e = error as AxiosError;
//       setError((e.response?.data as AxiosErrorResponse).message);
//     },
//   }
// );
