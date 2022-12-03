import { FC, useState } from "react";
import { Box } from "components/global/Box";
import { getIsAuth } from "redux/auth";
import { useAppSelector } from "redux/hook";
import {
  ButtonLink,
  HeaderBox,
  LinkLogo,
  Nav,
  NavList,
  Plus,
} from "./Header.styled";
import { UserMenu } from "components/modules/UserMenu";
import { ReactComponent as Logo } from "img/svg/logo.svg";
import { InputSearch } from "../form/InputForm";
import { NavItem } from "./NavItem/NavItem";
import { useLocation } from "react-router-dom";
import { Language } from "./Language/Language";

type Props = {
  path: string;
};

export type TTabs = {
  path: string;
  label: string;
};

const tabs: TTabs[] = [
  {
    path: "/",
    label: "Головна",
  },
  {
    path: "/nav",
    label: "Навігація",
  },
  {
    path: "/track-list",
    label: "Бібліотека",
  },
];

export const Header: FC<Props> = ({ path }) => {
  const isAuth = useAppSelector(getIsAuth);
  const [search, setSearch] = useState("");
  const [hover, setHover] = useState<TTabs>(tabs[0]);
  const { pathname } = useLocation();

  const blur = () => {
    const current: TTabs | undefined = tabs.find((x) => x.path === pathname);

    if (!current) return;

    setHover(current);
  };

  return (
    <HeaderBox>
      <Box display="flex" alignItems="center" p={3} width="1566px" m="0 auto">
        <LinkLogo to="/">
          <Logo />
        </LinkLogo>

        <InputSearch set={setSearch} value={search} />

        <Nav>
          <NavList>
            {tabs.map((item) => {
              return (
                <NavItem
                  key={item.label}
                  set={setHover}
                  blur={blur}
                  item={item}
                  path={path}
                  hover={hover}
                />
              );
            })}
          </NavList>
        </Nav>

        <ButtonLink to={"/new"}>
          Додати пісню
          <Plus size={24} />
        </ButtonLink>

        <Language />

        {/* <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab ? "" : "😋"}
          </motion.div>
        </AnimatePresence> */}
        {/* <nav>
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
        </nav> */}
        {isAuth && <UserMenu />}
      </Box>
    </HeaderBox>
  );
};
