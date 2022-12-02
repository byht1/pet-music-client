import { FC } from "react";
import { Box } from "components/global/Box";
import { getIsAuth } from "redux/auth";
import { useAppSelector } from "redux/hook";
import { HeaderBox, NavList, NLink } from "./Header.styled";
import { UserMenu } from "components/modules/UserMenu";
import Logo from "img/logo.svg";

type Props = {
  path: string;
};

export const Header: FC<Props> = ({ path }) => {
  const isAuth = useAppSelector(getIsAuth);

  return (
    <HeaderBox>
      <Box
        display="grid"
        gridTemplateColumns="1fr auto"
        alignItems="center"
        p={4}
      >
        <nav>
          <NavList>
            <li>
              <NLink to={"/"} state={{ from: path }} end>
                Home
              </NLink>
            </li>
            <li>
              <NLink to={"/track-list"} state={{ from: path }}>
                Список треків користувача
              </NLink>
            </li>
            {isAuth && (
              <li>
                <NLink to={"/new-track"} state={{ from: path }}>
                  Додати нові трекі
                </NLink>
              </li>
            )}

            <li>
              <NLink to={"/user"} state={{ from: path }}>
                Мій профіль
              </NLink>
            </li>
            <li>
              <NLink to={"/comment"} state={{ from: path }}>
                Коментарі
              </NLink>
            </li>
            {!isAuth && (
              <>
                <li>
                  <NLink to={"/user/sing-up"} state={{ from: path }}>
                    Регистрація
                  </NLink>
                </li>
                <li>
                  <NLink to={"/user/log-in"} state={{ from: path }}>
                    Авторизація
                  </NLink>
                </li>
              </>
            )}
          </NavList>
        </nav>
        {isAuth && <UserMenu />}
      </Box>
    </HeaderBox>
  );
};
