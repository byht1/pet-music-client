import React, { FC } from "react";
import {
  ArrowBack,
  Clear,
  LabelSearch,
  Lens,
  Search,
} from "./InputForm.styled";

// import throttle from "lodash.throttle";

type Props = {
  value: string;
  set: React.Dispatch<React.SetStateAction<string>>;
};

//MdOutlineClear

export const InputSearch: FC<Props> = ({ value, set }) => {
  const length = value.length;

  return (
    <LabelSearch>
      {length ? <ArrowBack size={17.5} /> : <Lens size={17.5} />}

      <Search
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          set(e.target.value)
        }
        type="text"
        name="search"
        value={value}
        placeholder="Пошук"
        l={length}
      />

      {length > 0 && (
        <button onClick={() => set("")} type="button">
          <Clear size={17.5} />
        </button>
      )}
    </LabelSearch>
  );
};
