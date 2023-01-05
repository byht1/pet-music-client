import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsAuth } from "redux/auth";

type Props = {
  children: JSX.Element;
};

export const PrivateRouter: FC<Props> = ({ children }) => {
  const isAuth = useSelector(getIsAuth);

  const redirect = isAuth;
  return <>{redirect ? children : <Navigate to="/" replace />}</>;
};
