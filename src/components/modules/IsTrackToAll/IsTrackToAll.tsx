import { Box } from "components/global/Box";
import svgForm from "img/form";
import { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import { RClick } from "type";
import { ButtonCheck } from "./IsTrackToAll.styled";

const { Headphone, Microphone } = svgForm;

type Props = {
  position: "center" | "start";
};

// type RClick = React.MouseEvent<HTMLElement>;

export const IsTrackToAll: FC<Props> = ({ position }) => {
  const { setValue, getValues } = useFormContext();
  const [value, setValueC] = useState<boolean>(getValues("toAllTrack"));
  // const value = ;

  const click = (e: RClick, variable: boolean) => {
    e.stopPropagation();

    setValue("toAllTrack", variable);
    setValueC(variable);

    e.currentTarget.blur();

    return;
  };

  return (
    <Box display="flex" gridGap="24px" justifyContent={position} mt="60px">
      <ButtonCheck
        active={value}
        onClick={(e: RClick) => click(e, true)}
        type="button"
      >
        <Microphone />
        Для всіх
      </ButtonCheck>
      <ButtonCheck
        active={!value}
        onClick={(e: RClick) => click(e, false)}
        type="button"
      >
        <Headphone />
        Для себе
      </ButtonCheck>
    </Box>
  );
};

// () => setValue("toAllTrack", false);
