import { Box } from "components/global/Box";
import { FaUserAlt } from "react-icons/fa";
import { UserLink } from "./UserMenuAuth.styled";

export const UserMenuAuth = () => {
  return (
    <Box ml="auto">
      <UserLink to="/user/log-in">
        Увійти
        <FaUserAlt size={32} color="var(--border)" />
      </UserLink>
    </Box>
  );
};
