import { useState } from "react";
import { EFormName } from "helper";
import { ImgDropZone } from "./element/ImgDropZone";
import { Box } from "components/global/Box";
import { InputForm, TextareaForm } from "components/global/form/InputForm";
import { Permalink } from "./element/Permalink";
import { SelectorGenre } from "./element/SelectorGenre";
import { RClick } from "type";
import { IsTrackToAll } from "components/modules/IsTrackToAll";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ButtonOption } from "../../ButtonOption";

export const Track = () => {
  const { trigger } = useFormContext();
  const [selectorShow, setSelectorShow] = useState(false);
  const navigate = useNavigate();

  const boxClick = async (e: RClick) => {
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

        <ButtonOption buttonType="button" onClick={click} />
      </div>
    </Box>
  );
};
