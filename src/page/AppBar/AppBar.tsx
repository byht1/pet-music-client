import { Box } from "components/global/Box";
import { UserMenu } from "components/modules/UserMenu";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, NavList, NLink } from "./AppBar.styled";
import { useSelector } from "react-redux";
import { getIsAuth } from "redux/auth";

export default function AppBar() {
  const isAuth = useSelector(getIsAuth);

  return (
    <>
      <Header>
        <Box
          display="grid"
          gridTemplateColumns="1fr auto"
          alignItems="center"
          p={4}
        >
          <nav>
            <NavList>
              <li>
                <NLink to={"/"} end>
                  Home
                </NLink>
              </li>
              <li>
                <NLink to={"/track-list"}>Список треків користувача</NLink>
              </li>
              <li>
                <NLink to={"/new-track"}>Додати нові трекі</NLink>
              </li>
              <li>
                <NLink to={"/profile"}>Мій профіль</NLink>
              </li>
              <li>
                <NLink to={"/comment"}>Коментарі</NLink>
              </li>
              {!isAuth && (
                <>
                  <li>
                    <NLink to={"/sing-up"}>Регистрація</NLink>
                  </li>
                  <li>
                    <NLink to={"/log-in"}>Авторизація</NLink>
                  </li>
                </>
              )}
            </NavList>
          </nav>
          {isAuth && <UserMenu />}
        </Box>
      </Header>
      <Suspense fallback={"Loader..."}>
        <Outlet />
      </Suspense>
    </>
  );
}
