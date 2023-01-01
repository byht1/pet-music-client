import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { NewPushTrack } from "components/modules/NewPushTrack";
import { FormBox } from "components/global/form/FormBox";
import { useForm } from "react-hook-form";
import { Container } from "components/global/Container";
import { InfoPlatform } from "components/modules/InfoPlatform";
import { ITrackForm } from "components/modules/form/old/TrackForm/type";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaTrackNew } from "./step/StepTwo/Track/schema";
import { EFormName } from "helper";

export default function NewTrack() {
  const methods = useForm<ITrackForm>({
    defaultValues: {
      [EFormName.TOALL]: true,
      [EFormName.GENRES]: [],
    },
    resolver: yupResolver(schemaTrackNew),
    mode: "onBlur",
  });
  const { handleSubmit } = methods;

  const submit = (data: any) => {
    console.log("🚀  data", data);
  };
  return (
    <>
      <NewPushTrack />

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
    </>
  );
}
