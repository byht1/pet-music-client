import styled from "styled-components";

export const DropZone = styled.div`
  padding: 12px;
  padding-top: 162px;

  border-radius: ${(p) => p.theme.radii.inputAuthForm};

  text-align: center;

  cursor: pointer;

  background-color: ${(p) => p.theme.colors.border};
`;

export const CheatButton = styled.div`
  margin-top: 160px;
  padding: 13px 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  border-radius: ${(p) => p.theme.radii.normalMax};

  background-color: rgba(55, 56, 58, 0.8); ;
`;

export const ImgPrivy = styled.img`
  border-radius: ${(p) => p.theme.radii.normalMax};
`;

export const PermalinkBox = styled.div`
  display: block;

  margin-top: 36px;
  padding: 0 16px 0 24px;

  font-family: ${(p) => p.theme.fonts.roboto};
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-size: ${(p) => p.theme.fontSizes.normal};
  line-height: ${(p) => p.theme.lineHeights.body};
`;

export const PermalinkLink = styled.span`
  display: block;
  /* padding-top: 5px; */
  color: ${(p) => p.theme.colors.border};
`;

export const LabelBox = styled.label`
  width: 100%;
  position: relative;
`;

export const Placeholder = styled.span`
  position: absolute;
  top: 50%;
  left: 5px;

  transform: translateY(-50%);
`;

export const PermalinkInput = styled.input`
  display: inline-block;
  padding: 5px;
  /* padding-left: 0; */
  width: 100%;

  border: none;
  outline: none;

  font-family: ${(p) => p.theme.fonts.roboto};
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-size: ${(p) => p.theme.fontSizes.normal};
  line-height: ${(p) => p.theme.lineHeights.body};

  background-color: transparent;
  color: ${(p) => p.theme.colors.w};

  &:focus {
    border-bottom: 1px solid ${(p) => p.theme.colors.w};
  }
`;

export const ButtonPen = styled.button`
  padding: 9px;

  border-radius: ${(p) => p.theme.radii.eight};

  color: ${(p) => p.theme.colors.border};
  background-color: ${(p) => p.theme.colors.bs};
`;
