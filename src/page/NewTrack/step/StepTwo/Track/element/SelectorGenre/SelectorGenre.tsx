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
import { InputError } from "components/global/form/InputForm/InputError";

type Props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SelectorGenre: FC<Props> = ({ show, setShow }) => {
  const {
    trigger,
    watch,
    formState: { errors },
  } = useFormContext();
  const genreCheck: string[] | undefined = watch(EFormName.GENRES);
  const error = errors[EFormName.GENRES];

  const showSelector = async (e: RClick) => {
    e.stopPropagation();

    await trigger(EFormName.GENRES);

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
          error={error}
        />
        <ButtonShow onClick={(e: RClick) => showSelector(e)} type="button">
          {show ? <SelectorArrowUp /> : <SelectorArrowDown />}
        </ButtonShow>
        {error && <InputError text={error?.message} />}
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
