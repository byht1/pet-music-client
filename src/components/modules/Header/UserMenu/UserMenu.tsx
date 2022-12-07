import { FC } from "react";
import UserIcon from "img/user-icon.png";
import { Icon } from "./UserMenu.styled";
import { Button } from "components/global/button/Button";
import { Box } from "components/global/Box";
import { useSelector } from "react-redux";
import { getUser, logOut } from "redux/auth";
import { useAppDispatch } from "redux/hook";

// type Props = {};

export const UserMenu: FC = () => {
  const { username } = useSelector(getUser);
  const dispatch = useAppDispatch();
  // const onClick = () => dispatch(logOut());

  return (
    <Box display="flex" alignItems="center" gridGap={3}>
      <Icon src={UserIcon} alt="user-icon" />
      <p>{username}</p>
      <Button click={() => dispatch(logOut())}>Вихід</Button>
    </Box>
  );
};
