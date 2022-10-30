import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${(p) => p.theme.space[5]}px;
  padding: ${(p) => p.theme.space[3]}px;
  width: 550px;
`;
