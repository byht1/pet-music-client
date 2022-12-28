import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { Suspense } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { NewPushTrack } from "components/modules/NewPushTrack";
import { FormBox } from "components/global/form/FormBox";
import { useForm } from "react-hook-form";
import { Container } from "components/global/Container";
import { BoxForm } from "./NewTrack.styled";
import { InfoPlatform } from "components/modules/InfoPlatform";

export default function NewTrack() {
  const methods = useForm({
    defaultValues: {
      toAllTrack: true,
    },
  });
  const { handleSubmit } = methods;

  const submit = (data: any) => {
    console.log("🚀  data", data);
  };
  return (
    <>
      <NewPushTrack />
      {/* <Section> */}
      {/* <h2>NewTrack</h2> */}
      {/* <ul>
        <li>
          <NavLink to={"/new-track/album"}>Створити новий альбом</NavLink>
        </li>
        <li>
          <NavLink to={"/new-track/track"}>Додати трек</NavLink>
        </li>
      </ul> */}

      <Container>
        {/* <BoxForm> */}
        <FormBox methods={methods} submit={handleSubmit(submit)}>
          <Suspense fallback={<div>...Loader</div>}>
            <Outlet />
          </Suspense>
          <div>
            <button>submit</button>
          </div>
        </FormBox>

        {/* </BoxForm> */}
      </Container>

      <InfoPlatform />

      {/* </Section> */}

      {/* <Footer /> */}
    </>
  );
}
