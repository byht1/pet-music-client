import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${(p) => p.theme.space[5]}px;
  padding-top: ${(p) => p.theme.space[6]}px;
  padding-left: ${(p) => p.theme.space[8]}px;
  padding-right: ${(p) => p.theme.space[8]}px;
  padding-bottom: ${(p) => p.theme.space[6]}px;
  width: ${(p) => p.theme.size.authFormWidth};
  height: ${(p) => p.theme.size.authFormHeight};

  border-radius: ${(p) => p.theme.radii.authForm};

  background-color: ${(p) => p.theme.colors.fb};
`;
