import { motion } from "framer-motion";
import { FC } from "react";
import { TTabs } from "../Header";
import { Current, NLink } from "../Header.styled";

type Props = {
  item: TTabs;
  path: string;
  hover: TTabs;
  set: React.Dispatch<React.SetStateAction<TTabs>>;
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
