import React, { FC } from "react";
import { MdOutlineClear } from "react-icons/md";
import { RClick } from "type";

import { ButtonBox } from "./ButtonClose.styled";

type Props = {
  disabled?: boolean;
  click: (e: RClick) => any;

  position?: boolean

  mb?: number;
  ml?: number;
  mr?: number;
  mt?: number;
};

export const ButtonClose: FC<Props> = ({
  disabled = false,
  click,
  ...props
}) => {
  return (
    <ButtonBox
      type="button"
      disabled={disabled}
      onClick={(e: RClick) => click(e)}
      {...props}
    >
      <MdOutlineClear size={18} color="var(--white)" />
    </ButtonBox>
  );
};
