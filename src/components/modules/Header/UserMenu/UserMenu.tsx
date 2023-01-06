import { FC } from "react";
import UserIcon from "img/user-icon.png";
import { CircleBox, Icon } from "./UserMenu.styled";
import { Button } from "components/global/button/Button";
import { Box } from "components/global/Box";
import { useSelector } from "react-redux";
import { getPicture, getUser, logOutReducer } from "redux/auth";
import { useAppDispatch } from "redux/hook";
import { useMutation } from "@tanstack/react-query";
import { logOut } from "api";

// type Props = {};

export const UserMenu: FC = () => {
  const picture = useSelector(getPicture);
  const dispatch = useAppDispatch();
  const { mutateAsync } = useMutation({
    mutationFn: logOut,
    onSuccess: () => dispatch(logOutReducer()),
  });

  return (
    <>
      <Box ml="auto" width="56px" height="56px">
        <CircleBox>
          <Icon src={picture} alt="user-icon" />
          {/* <p>{username}</p> */}
        </CircleBox>
      </Box>

      {/* <Button click={async () => await mutateAsync()}>Вихід</Button> */}
    </>
  );
};
