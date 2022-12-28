import styled from "styled-components";

export const ButtonCheck = styled.button<any>`
  padding: 4px 24px;

  display: flex;
  align-items: center;
  gap: 12px;

  border-radius: ${(p) => p.theme.radii.inputAuthForm};

  font-family: ${(p) => p.theme.fonts.roboto};
  font-size: ${(p) => p.theme.fontSizes.normal};
  line-height: ${(p) => p.theme.lineHeights.body};

  background-color: ${(p) => (p.active ? p.theme.colors.bs : "transparent")};
  color: ${(p) => p.theme.colors.w};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.v};
  }
`;
