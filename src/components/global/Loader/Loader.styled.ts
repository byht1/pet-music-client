import styled, { keyframes } from "styled-components";
const spinierLoader = keyframes`
  0% {
   transform: scaleY(1);
  }

  50% {
   transform: scaleY(0.4);
  }

  100% {
   transform: scaleY(1);
  }
`;

export const LoaderBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(p) => p.theme.colors.bgl};
`;

export const BoxElement = styled.span`
  display: inherit;
`;

export const Element = styled.span<any>`
  width: 4px;
  height: 44px;
  margin: 2px;
  border-radius: 2px;
  display: inline-block;
  animation: 1s cubic-bezier(0.2, 0.68, 0.18, 1.08) ${(p) => p.delay / 10}s
    infinite normal both running ${spinierLoader};
  background: linear-gradient(180deg, #c7b8e8 0%, #ffffff 100%);
`;
