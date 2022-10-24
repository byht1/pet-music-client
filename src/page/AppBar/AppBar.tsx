import React, { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function AppBar() {
  return (
    <div>
      <header>
        <ul>
          <li>
            <NavLink to={"/"} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/sing-up"}>Регистрація</NavLink>
          </li>
          <li>
            <NavLink to={"/log-in"}>Авторизація</NavLink>
          </li>
          <li>
            <NavLink to={"/track-list"}>Список треків користувача</NavLink>
          </li>
          <li>
            <NavLink to={"/new-track"}>Додати нові трекі</NavLink>
          </li>
          <li>
            <NavLink to={"/profile"}>Мій профіль</NavLink>
          </li>
          <li>
            <NavLink to={"/comment"}>Коментарі</NavLink>
          </li>
        </ul>
      </header>
      <Suspense fallback={"Loader..."}>
        <Outlet />
      </Suspense>
    </div>
  );
}
