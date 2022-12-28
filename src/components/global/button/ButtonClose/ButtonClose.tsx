import React, { FC } from "react";
import { MdOutlineClear } from "react-icons/md";

import { ButtonBox } from "./ButtonClose.styled";

type Props = {
  disabled?: boolean;
  click: () => any;

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
    <ButtonBox type="button" disabled={disabled} onClick={click} {...props}>
      <MdOutlineClear size={18} color="var(--white)" />
    </ButtonBox>
  );
};
