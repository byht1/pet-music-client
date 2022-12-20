import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { MdOutlineClear } from "react-icons/md";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const Label = styled.label<any>`
  position: relative;
  display: flex;
  align-items: center;

  margin-left: ${(p) => (p.ml ? "27px" : 0)};

  font-family: ${(p) => p.theme.fonts.roboto};
  line-height: ${(p) => p.theme.lineHeights.body};

  cursor: pointer;
`;

export const NameInput = styled.span`
  position: absolute;
  top: 12px;
  left: 24px;
  display: block;
  margin-right: ${(p) => p.theme.space[4]}px;
  width: auto;
  width: 200px;
`;

export const Input = styled.input<any>`
  border: ${(p) => (p.error ? `2px solid ${p.theme.colors.e}` : "none")};
  outline: none;

  width: 100%;
  height: 48px;

  padding: 12px 24px;

  border-radius: ${(p) => p.theme.radii.inputAuthForm};

  background-color: ${(p) =>
    p.length || p.error ? p.theme.colors.w : p.theme.colors.bs};
  color: ${(p) => (p.length ? p.theme.colors.bs : p.theme.colors.w)};
`;

export const TextError = styled.span`
  /* position: absolute;
  top: calc(100% + 7px); */

  width: ${(p) => p.theme.size.max};
  color: ${(p) => p.theme.colors.e};

  /* &::before {
    display: inline;
    content: "⚠ ";
  } */
`;

export const InputCheckbox = styled.input`
  display: none;
`;

export const Checkbox = styled.span<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 2px solid
    ${(p) => (p.check ? p.theme.colors.v : p.theme.colors.border)};

  border-radius: 3px;

  background-color: ${(p) => (p.check ? p.theme.colors.v : "transparent")};
`;

export const Text = styled.span`
  margin-left: 12px;

  font-family: ${(p) => p.theme.fonts.roboto};
  font-size: ${(p) => p.theme.fontSizes.min};
  line-height: ${(p) => p.theme.lineHeights.big};
`;

export const ShowBox = styled.div`
  position: absolute;
  top: 12px;
  right: 24px;
`;

export const LabelSearch = styled.label`
  position: relative;
  width: 416px;
`;

export const Search = styled.input<any>`
  outline: none;
  border: none;

  width: 100%;

  padding: 12px 60px;

  border-radius: 30px;

  font-family: ${(p) => p.theme.fonts.roboto};
  font-size: ${(p) => p.theme.fontSizes.normal};
  line-height: ${(p) => p.theme.lineHeights.body};

  background-color: ${(p) => (p.l ? p.theme.colors.w : p.theme.colors.g)};
  color: ${(p) => (p.l ? p.theme.colors.bs : p.theme.colors.border)};

  &:placeholder-shown {
    color: ${(p) => p.theme.colors.border};
  }
`;

export const Lens = styled(FaSearch)`
  position: absolute;
  top: 50%;
  left: 24px;

  transform: translateY(-50%);

  color: ${(p) => p.theme.colors.w};
`;

export const ArrowBack = styled(AiOutlineArrowLeft)`
  position: absolute;
  top: 50%;
  left: 24px;

  transform: translateY(-50%);

  color: ${(p) => p.theme.colors.border};
`;

export const Clear = styled(MdOutlineClear)`
  position: absolute;
  top: 50%;
  right: 24px;

  transform: translateY(-50%);

  color: ${(p) => p.theme.colors.border};
`;

export const InputRange = styled.input<any>`
  width: 100%;

  -webkit-appearance: none;
  margin-right: 15px;
  width: 100%;
  height: 7px;

  cursor: pointer;

  background: ${(p) => p.theme.colors.border};
  border-radius: 5px;
  background-image: linear-gradient(
    ${(p) => p.theme.colors.w},
    ${(p) => p.theme.colors.w}
  );
  background-size: ${(p) => p.progress}% 100%;
  background-repeat: no-repeat;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: ${(p) => p.theme.colors.w};
    cursor: pointer;
    box-shadow: 0 0 2px 0 #555;
    transition: background 0.3s ease-in-out;
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
`;
