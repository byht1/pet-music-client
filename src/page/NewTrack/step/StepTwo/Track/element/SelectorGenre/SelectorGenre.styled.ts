import styled from "styled-components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { Input } from "components/global/form/InputForm";

//IoIosArrowDown

export const InputSearchSelect = styled(Input)`
  padding-right: 52px;

  ${(p) => p.length && `background-color: ${p.theme.colors.w};`}
`;

export const SelectorArrowDown = styled(IoIosArrowDown)`
  position: absolute;
  top: 50%;
  right: 24px;

  transform: translateY(-50%);

  color: ${(p) => p.theme.colors.border};
`;

export const SelectorArrowUp = styled(IoIosArrowUp)`
  position: absolute;
  top: 50%;
  right: 24px;

  transform: translateY(-50%);

  color: ${(p) => p.theme.colors.border};
`;

export const List = styled.ul`
  overflow: auto;

  position: absolute;
  z-index: 2;

  left: 0;
  right: 0;

  max-height: 536px;
  /* padding: 8px 24px; */
  margin-top: 8px;

  border-radius: ${(p) => p.theme.radii.inputAuthForm};

  background-color: ${(p) => p.theme.colors.w};

  &::-webkit-scrollbar {
    width: 36px;
  }

  &::-webkit-scrollbar-thumb {
    border: 12px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 9999px;
    background-color: ${(p) => p.theme.colors.g};
  }
`;

export const ButtonShow = styled.button`
  outline: none;
  border: none;
`;
