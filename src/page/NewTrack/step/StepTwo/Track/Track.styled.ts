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
