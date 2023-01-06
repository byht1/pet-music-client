import { Box } from "components/global/Box";
import { UserIcon, UserLink } from "./UserMenuAuth.styled";

export const UserMenuAuth = () => {
  return (
    <Box ml="auto">
      <UserLink to="/user/log-in">
        Увійти
        <UserIcon size={32} />
      </UserLink>
    </Box>
  );
};
