import { FC } from "react";
import UserIcon from "img/user-icon.png";
import { Icon } from "./UserMenu.styled";
import { Button } from "components/global/button/Button";
import { Box } from "components/global/Box";
import { useSelector } from "react-redux";
import { getUser, logOutReducer } from "redux/auth";
import { useAppDispatch } from "redux/hook";
import { useMutation } from "@tanstack/react-query";
import { logOut } from "api";

// type Props = {};

export const UserMenu: FC = () => {
  const { username } = useSelector(getUser);
  const dispatch = useAppDispatch();
  const { mutateAsync } = useMutation({
    mutationFn: logOut,
    onSuccess: () => dispatch(logOutReducer()),
  });

  return (
    <Box display="flex" alignItems="center" gridGap={3}>
      <Icon src={UserIcon} alt="user-icon" />
      <p>{username}</p>
      <Button click={async () => await mutateAsync()}>Вихід</Button>
    </Box>
  );
};
