import styled from "styled-components";

export const ButtonBox = styled.button<any>`
  ${(p) => p.mt && `margin-top: ${p.mt}px;`}
  ${(p) => p.mb && `margin-bottom: ${p.mb}px;`}
  ${(p) => p.mr && `margin-right: ${p.mr}px;`}
  ${(p) => p.ml && `margin-left: ${p.ml}px;`};

  ${(p) =>
    p.position &&
    "position: absolute; top: 7px; right: 7px; transform: translate(-50%, -50%);"}

  border: none;
  outline: none;

  display: ${(p) => (p.display ? p.display : "inline-block")};

  background-color: transparent;
`;
