import styled from "styled-components";

export const ProgressBox = styled.div`
  overflow: hidden;
  width: 100%;
  height: 12px;

  border-radius: 12px;

  background-color: ${(p) => p.theme.colors.border};
`;

export const CurrentProgress = styled.div<any>`
  width: ${(p) => p.v}%;
  height: 100%;

  background-color: ${(p) => p.theme.colors.va};
`;
