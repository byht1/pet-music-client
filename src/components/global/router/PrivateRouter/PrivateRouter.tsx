import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { getIsAuth, getRefreshing } from "redux/auth";
import { useAppSelector } from "redux/hook";

type Props = {
  component: ReactNode | JSX.Element;
  redirectTo?: string;
};

export const PrivateRouter: FC<Props> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const isAuth = useAppSelector(getIsAuth);
  const isRefreshing = useAppSelector(getRefreshing);

  const shouldRedirect = !isAuth && !isRefreshing;

  return <>{shouldRedirect ? <Navigate to={redirectTo} /> : Component}</>;
};
