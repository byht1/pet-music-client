import { Box } from "components/global/Box";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { FormZone, List, NLink } from "./StepTwo.styled";

export const StepTwo = () => {
  return (
    <FormZone>
      <Box>
        <List>
          <li>
            <NLink to="/new/step2" end>
              Інформація про пісню{" "}
            </NLink>
          </li>
          <li>
            <NLink to="/new/step2/album">Альбом</NLink>
          </li>
        </List>
      </Box>
      <Suspense fallback={<div>...Loader</div>}>
        <Outlet />
      </Suspense>
    </FormZone>
  );
};
