import React, { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "components/modules/Header";

const exception = ["sing-up", "log-in", "forgotten"];

export default function AppBar() {
  const { pathname } = useLocation();

  const rule = pathname.split("/").find((x) => exception.includes(x));

  return (
    <>
      {!rule && <Header path={pathname} />}
      <Suspense fallback={"Loader..."}>
        <Outlet />
      </Suspense>
    </>
  );
}
