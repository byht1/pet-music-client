import styled from "styled-components";

export const Label = styled.label<any>`
  position: relative;
  display: flex;
  align-items: center;

  margin-left: ${(p) => (p.ml ? "27px" : 0)};

  font-family: ${(p) => p.theme.fonts.roboto};
  line-height: ${(p) => p.theme.lineHeights.body};
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

export const Input = styled.input`
  border: none;
  outline: none;

  width: 100%;
  height: 48px;

  padding: 12px 24px;

  border-radius: ${(p) => p.theme.radii.inputAuthForm};

  background-color: ${(p) => p.theme.colors.bs};
  color: ${(p) => p.theme.colors.w};
`;

export const TextError = styled.span`
  position: absolute;
  top: 100%;

  width: ${(p) => p.theme.size.max};
  text-align: center;
  color: #bf1650;

  /* &::before {
    display: inline;
    content: "⚠ ";
  } */
`;

export const InputCheckbox = styled.input`
  display: none;
`;

export const Checkbox = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  border: 2px solid ${(p) => p.theme.colors.border};
`;

export const Text = styled.span`
  margin-left: 12px;

  font-family: ${(p) => p.theme.fonts.roboto};
  font-size: ${(p) => p.theme.fontSizes.min};
  line-height: ${(p) => p.theme.lineHeights.big};
`;
