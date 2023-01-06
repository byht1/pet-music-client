import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { authSchema } from "../typeSchema/authSchema";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "redux/hook";
import { errorReducer, logInReducer } from "redux/auth";
import { getErrorMessage, getIsError, getUser } from "redux/auth/auth-selector";
import { useSelector } from "react-redux";
import { schemaLogIn } from "../auth/LogInForm/schema";
import { schemaSingUp } from "../auth/SingUpForm/schema";
import { useMutation } from "@tanstack/react-query";
import { googleAuth, logIn, singUp } from "api";
import { AxiosError } from "axios";
import { IUser } from "redux/auth/type/type";

// schemaForgotten;
// const schemes = {
//   signup: schemaSingUp,
//   login: schemaLogIn,
//   forgot: schemaForgotten,
//   password: schemaNewPassword,
// };

export enum ETypeUseAuth {
  SIGNUP = "signup",
  LOGIN = "login",
  GOOGLE = "google",
}

// type TFormType = "signup" | "login" | "forgot" | "password";

const method = {
  [ETypeUseAuth.SIGNUP]: {
    schema: schemaSingUp,
    fn: singUp,
  },
  [ETypeUseAuth.LOGIN]: {
    schema: schemaLogIn,
    fn: logIn,
  },
  [ETypeUseAuth.GOOGLE]: {
    schema: schemaLogIn,
    fn: googleAuth,
  },
};

export const useAuth = (type: ETypeUseAuth) => {
  const { schema, fn } = method[type];
  const dispatch = useAppDispatch();

  const { mutateAsync } = useMutation<
    IUser,
    AxiosError<string[], any>,
    authSchema,
    unknown
  >({
    mutationFn: fn,
    onSuccess: (data: IUser) => {
      dispatch(logInReducer(data));
      navigate("/", { replace: true });
      methods.reset();
    },
    onError: (error: AxiosError<string[]>) => {
      const mes = error.response?.data[0] ?? "Невідома помилка";
      dispatch(errorReducer(mes));
    },
  });

  const user = useSelector(getUser);
  const error = useSelector(getIsError);
  const errorMessage = useSelector(getErrorMessage);
  const navigate = useNavigate();
  const methods = useForm<authSchema>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: authSchema) => {
    mutateAsync(data);
  };
  return {
    user,
    error,
    errorMessage,
    methods,
    onSubmit,
  };
};

// export const useAuth = (type: string) => {
//   const schema = type === typeSchema.LOGIN ? schemaLogIn : schemaSingUp;
//   const dispatch = useAppDispatch();
//   const user = useSelector(getUser);
//   const loader = useSelector(getIsLoggedIn);

//   const error = useSelector(getError);
//   const errorMessage = useSelector(getErrorMessage);
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<authSchema>({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = async (data: authSchema) => {
//     delete data.confirmPassword;
//     try {
//       const res = await dispatch(authorization({ type, body: data }));

//       if (res.type === "auth/authorization/rejected") return;

//       navigate("/", { replace: true });
//       reset();
//     } catch (error) {}
//   };

//   return {
//     user,
//     loader,
//     error,
//     errorMessage,
//     form: { register, handleSubmit, errors },
//     onSubmit,
//   };
// };
