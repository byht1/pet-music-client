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
import { UserMenu } from "components/modules/Header/UserMenu";
import { ReactComponent as Logo } from "img/svg/logo.svg";
import { InputSearch } from "../form/InputForm";
import { NavItem } from "./NavItem/NavItem";
import { useLocation } from "react-router-dom";
import { Language } from "./Language/Language";
import { UserMenuAuth } from "./UserMenuAuth/UserMenuAuth";
import { nav, TNav } from "helper";

type Props = {
  path: string;
};

export const Header: FC<Props> = ({ path }) => {
  const isAuth = useAppSelector(getIsAuth);
  const [search, setSearch] = useState("");
  const [hover, setHover] = useState<TNav>(nav[0]);
  const { pathname } = useLocation();

  const blur = () => {
    const current: TNav | undefined = nav.find((x) => x.path === pathname);

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
            {nav.map((item) => {
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

        {isAuth ? <UserMenu /> : <UserMenuAuth />}
      </Box>
    </HeaderBox>
  );
};
