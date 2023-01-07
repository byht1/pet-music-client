import { Box } from "components/global/Box";
import { Loader } from "components/global/Loader/Loader";
import { motion } from "framer-motion";
import { EFormName, formNav, TNav } from "helper";
import { Suspense, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { RClick } from "type";

import { Current, FormZone, List, NLink } from "./StepTwo.styled";

export const StepTwo = () => {
  const { trigger, getValues } = useFormContext();
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

  if (!getValues(EFormName.TRACK)) {
    return <Navigate to="/new" />;
  }

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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </FormZone>
  );
};
