import { FC } from "react";
import UserIcon from "img/user-icon.png";
import { Icon } from "./UserMenu.styled";
import { Button } from "components/global/Button";
import { Box } from "components/global/Box";

// type Props = {};

export const UserMenu: FC = () => {
  const onClick = async () => {
    try {
    } catch (error) {}
  };
  return (
    <Box display="flex" alignItems="center" gridGap={3}>
      <Icon src={UserIcon} alt="user-icon" />
      <p>Я</p>
      <Button click={onClick}>Вихід</Button>
    </Box>
  );
};
