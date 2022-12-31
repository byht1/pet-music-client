import { FC } from "react";
import { Box } from "components/global/Box";
import { EFormName, genresList } from "helper";
import { Label, NameInput } from "components/global/form/InputForm";
import {
  ButtonShow,
  InputSearchSelect,
  List,
  SelectorArrowDown,
  SelectorArrowUp,
} from "./SelectorGenre.styled";
import { CheckboxGenre } from "../CheckboxGenre";
import { useFormContext } from "react-hook-form";
import { RClick } from "type";

type Props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SelectorGenre: FC<Props> = ({ show, setShow }) => {
  const { watch } = useFormContext();
  const genreCheck: string[] | undefined = watch(EFormName.GENRES);

  const showSelector = (e: RClick) => {
    e.stopPropagation();

    setShow((prev) => !prev);
  };

  return (
    <Box mt="36px" position="relative">
      <Label onClick={(e: RClick) => showSelector(e)}>
        {!genreCheck?.length && <NameInput>Жанр</NameInput>}
        <InputSearchSelect
          defaultValue={genreCheck ? genreCheck?.join(", ") : ""}
          length={genreCheck?.length}
          disabled
        />
        <ButtonShow onClick={(e: RClick) => showSelector(e)} type="button">
          {show ? <SelectorArrowUp /> : <SelectorArrowDown />}
        </ButtonShow>
      </Label>

      {show && (
        <List onClick={(e: RClick) => e.stopPropagation()}>
          {genresList.map((x) => {
            return (
              <li key={x.id}>
                <CheckboxGenre
                  check={genreCheck && genreCheck?.includes(x.genreName)}
                  text={x.genreName}
                  name={EFormName.GENRES}
                />
              </li>
            );
          })}
        </List>
      )}
    </Box>
  );
};
