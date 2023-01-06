import styled from "styled-components";

export const CircleBox = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid ${(p) => p.theme.colors.v};

  border-radius: 50%;
`;

export const Icon = styled.img`
  width: 44px;
  border-radius: 50%;
`;
