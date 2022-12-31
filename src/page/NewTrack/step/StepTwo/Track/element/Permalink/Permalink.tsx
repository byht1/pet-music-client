import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { HiPencil } from "react-icons/hi";

import { Box } from "components/global/Box";
import { Text } from "components/global/Text";
import { EFormName } from "helper";
import {
  ButtonPen,
  LabelBox,
  PermalinkBox,
  PermalinkInput,
  PermalinkLink,
  Placeholder,
} from "./Permalink.styled";

export const Permalink = () => {
  const [isFocus, setIsFocus] = useState(true);
  const [permalinkDisabled, setPermalinkDisabled] = useState(true);
  const { register, getValues, setFocus } = useFormContext();

  const notFocus = () => {
    const value = getValues(EFormName.PERMALINK);
    setIsFocus(value?.length === 0);
    setPermalinkDisabled(true);
  };

  const focus = () => {
    setPermalinkDisabled(false);

    setTimeout(() => {
      setFocus(EFormName.PERMALINK);
      setIsFocus(false);
    });
  };

  return (
    <PermalinkBox>
      <Text family="roboto" weight={700} size={16} lh={24}>
        Постійне посилання
      </Text>
      <Box
        mt="12px"
        display="grid"
        gridTemplateColumns="auto 1fr auto"
        gridGap="16px"
        alignItems="center"
      >
        <PermalinkLink>
          https://byht1.github.io/pet-music-client/track/
        </PermalinkLink>

        <LabelBox onBlur={notFocus}>
          {isFocus && <Placeholder>11bf5b37-e0b8-42e0-8dcf</Placeholder>}
          <PermalinkInput
            type="text"
            {...register(EFormName.PERMALINK)}
            disabled={permalinkDisabled}
          />
        </LabelBox>
        <ButtonPen onClick={focus} type="button">
          <HiPencil size={18} />
        </ButtonPen>
      </Box>
    </PermalinkBox>
  );
};
