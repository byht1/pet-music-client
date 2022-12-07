import { motion } from "framer-motion";
import { TNav } from "helper";
import { FC } from "react";
import { NLink, Current } from "./NavItem.styled";

type Props = {
  item: TNav;
  path: string;
  hover: TNav;
  set: React.Dispatch<React.SetStateAction<TNav>>;
  blur: () => void;
};

export const NavItem: FC<Props> = ({ item, path, set, blur, hover }) => {
  return (
    <li>
      {item.path === "/" ? (
        <NLink
          to={item.path}
          key={item.label}
          state={{ from: path }}
          onMouseEnter={() => set(item)}
          onMouseLeave={blur}
          end
        >
          {`${item.label}`}
          {item === hover ? (
            <Current as={motion.div} layoutId="underline" />
          ) : null}
        </NLink>
      ) : (
        <NLink
          to={item.path}
          key={item.label}
          state={{ from: path }}
          onMouseEnter={() => set(item)}
          onMouseLeave={blur}
        >
          {`${item.label}`}
          {item === hover ? (
            <Current as={motion.div} layoutId="underline" />
          ) : null}
        </NLink>
      )}
    </li>
  );
};
