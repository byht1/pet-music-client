import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { getIsAuth } from "redux/auth";
import { useAppSelector } from "redux/hook";

type Props = {
  component: ReactNode | JSX.Element;
  redirectTo?: string;
};

export const RestrictedRoute: FC<Props> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const isAuth = useAppSelector(getIsAuth);

  return <>{isAuth ? <Navigate to={redirectTo} /> : Component}</>;
};
