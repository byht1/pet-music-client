import { useState } from "react";
import { EFormName } from "helper";
import { ImgDropZone } from "./element/ImgDropZone";
import { Box } from "components/global/Box";
import { InputForm, TextareaForm } from "components/global/form/InputForm";
import { Permalink } from "./element/Permalink";
import { SelectorGenre } from "./element/SelectorGenre";
import { RClick } from "type";
import { IsTrackToAll } from "components/modules/IsTrackToAll";
import { Button } from "components/global/button/Button";
import { ButtonRest } from "./element/ButtonRest";
import { useFormContext } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";

export const Track = () => {
  const { trigger, getValues } = useFormContext();
  const [selectorShow, setSelectorShow] = useState(false);
  const navigate = useNavigate();

  const boxClick = async (e: RClick) => {
    // console.log(getValues(EFormName.NAME));
    // await trigger(EFormName.NAME);

    if (!selectorShow) return;

    await trigger(EFormName.GENRES);

    setSelectorShow(false);
  };

  const click = async () => {
    const error = await trigger([
      EFormName.NAME,
      EFormName.GENRES,
      EFormName.TAGS,
      EFormName.DESCRIPTION,
      EFormName.TOALL,
    ]);

    if (!error) return;

    navigate("/new/step2/album");
  };

  if (!getValues(EFormName.TRACK)) {
    return <Navigate to="/new" />;
  }

  return (
    <Box
      mt="60px"
      display="grid"
      gridTemplateColumns="460px 1fr"
      gridGap="24px"
      onClick={(e: RClick) => boxClick(e)}
    >
      <ImgDropZone />
      <div>
        <InputForm title="Назва" inputType="text" name={EFormName.NAME} />
        <Permalink />
        <SelectorGenre show={selectorShow} setShow={setSelectorShow} />
        <InputForm
          mt={36}
          title="Додаткові теги"
          inputType="text"
          name={EFormName.TAGS}
        />
        <TextareaForm mt={36} name={EFormName.DESCRIPTION} title="Опис:" />
        <IsTrackToAll position="start" />

        <Box mt="64px" display="flex" justifyContent="flex-end" gridGap="40px">
          <ButtonRest />
          <Button w="136px" type="button" click={click}>
            Далі
          </Button>
        </Box>
      </div>
    </Box>
  );
};
