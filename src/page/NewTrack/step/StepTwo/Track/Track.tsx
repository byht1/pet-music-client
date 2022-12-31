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

export const Track = () => {
  const [selectorShow, setSelectorShow] = useState(false);

  const boxClick = (e: RClick) => {
    setSelectorShow(false);
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

        <Box mt="64px" display="flex" justifyContent="flex-end" gridGap="40px">
          <ButtonRest />
          <Button w="136px" type="button">
            Далі
          </Button>
        </Box>
      </div>
    </Box>
  );
};
