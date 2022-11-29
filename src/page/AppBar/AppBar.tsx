import { Box } from "components/global/Box";
import { UserMenu } from "components/modules/UserMenu";
import React, { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header, NavList, NLink } from "./AppBar.styled";
import { useSelector } from "react-redux";
import { getIsAuth } from "redux/auth";

export default function AppBar() {
  const isAuth = useSelector(getIsAuth);
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/sing-up" && (
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
                  <NLink to={"/"} state={{ from: location.pathname }} end>
                    Home
                  </NLink>
                </li>
                <li>
                  <NLink to={"/track-list"} state={{ from: location.pathname }}>
                    Список треків користувача
                  </NLink>
                </li>
                {isAuth && (
                  <li>
                    <NLink
                      to={"/new-track"}
                      state={{ from: location.pathname }}
                    >
                      Додати нові трекі
                    </NLink>
                  </li>
                )}

                <li>
                  <NLink to={"/profile"} state={{ from: location.pathname }}>
                    Мій профіль
                  </NLink>
                </li>
                <li>
                  <NLink to={"/comment"} state={{ from: location.pathname }}>
                    Коментарі
                  </NLink>
                </li>
                {!isAuth && (
                  <>
                    <li>
                      <NLink
                        to={"/sing-up"}
                        state={{ from: location.pathname }}
                      >
                        Регистрація
                      </NLink>
                    </li>
                    <li>
                      <NLink to={"/log-in"} state={{ from: location.pathname }}>
                        Авторизація
                      </NLink>
                    </li>
                  </>
                )}
              </NavList>
            </nav>
            {isAuth && <UserMenu />}
          </Box>
        </Header>
      )}
      <Suspense fallback={"Loader..."}>
        <Outlet />
      </Suspense>
    </>
  );
}
