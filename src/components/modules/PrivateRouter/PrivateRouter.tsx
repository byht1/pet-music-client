import { FC, ReactFragment } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsAuth, getIsLoggedIn } from "redux/auth";

type Props = {
  children: JSX.Element;
};

export const PrivateRouter: FC<Props> = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isAuth = useSelector(getIsAuth);

  const redirect = !isLoggedIn && isAuth;
  return <>{redirect ? children : <Navigate to="/" replace />}</>;
};
