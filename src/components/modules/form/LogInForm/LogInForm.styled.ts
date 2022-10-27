import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.space[5]}px;
  padding: ${(p) => p.theme.space[3]}px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

export const NameInput = styled.span`
  display: block;
  margin-right: ${(p) => p.theme.space[4]}px;
`;
