import { Box } from "components/global/Box";
import { motion } from "framer-motion";
import { formNav, TNav } from "helper";
import { Suspense, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { RClick } from "type";

import { Current, FormZone, List, NLink } from "./StepTwo.styled";

export const StepTwo = () => {
  const { trigger } = useFormContext();
  const [hover, setHover] = useState<TNav>(formNav[0]);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const blur = () => {
    const current: TNav | undefined = formNav.find((x) => x.path === pathname);

    if (!current) return;

    setHover(current);
  };

  const link = async (e: RClick) => {
    e.preventDefault();

    const error = await trigger();

    if (!error) return;

    navigate("/new/step2/album");
  };

  return (
    <FormZone>
      <Box borderBottom="1px solid #37383A">
        <List>
          {formNav.map((x, i) => {
            return (
              <li key={x.id}>
                <NLink
                  to={x.path}
                  state={{ from: x.path }}
                  onMouseEnter={() => setHover(x)}
                  onMouseLeave={blur}
                  onClick={(e: RClick) => (i === 0 ? "" : link(e))}
                >
                  {x.label}
                </NLink>
                {x === hover && (
                  <Current as={motion.div} layoutId="underline" />
                )}
              </li>
            );
          })}
        </List>
      </Box>
      <Suspense fallback={<div>...Loader</div>}>
        <Outlet />
      </Suspense>
    </FormZone>
  );
};
