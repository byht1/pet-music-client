import { useForm } from "react-hook-form";
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
} from "redux/auth/auth-selector";
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
  const methods = useForm<authSchema>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: authSchema) => {
    delete data.confirmPassword;
    try {
      const res = await dispatch(authorization({ type, body: data }));

      if (res.type === "auth/authorization/rejected") return;

      navigate("/", { replace: true });
      methods.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    user,
    loader,
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
