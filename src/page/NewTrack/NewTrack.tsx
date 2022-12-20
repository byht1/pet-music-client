import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { Suspense } from "react";
import { server } from "./../../api/api";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Footer } from "components/modules/Footer";
import { NewPushTrack } from "components/modules/NewPushTrack";
import { FormBox } from "components/global/form/FormBox";
import { useForm } from "react-hook-form";

export default function NewTrack() {
  const methods = useForm();
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

      <FormBox methods={methods} submit={handleSubmit(submit)}>
        <Suspense fallback={<div>...Loader</div>}>
          <Outlet />
        </Suspense>
        <div>
          <button>submit</button>
        </div>
      </FormBox>

      {/* </Section> */}

      {/* <Footer /> */}
    </>
  );
}
