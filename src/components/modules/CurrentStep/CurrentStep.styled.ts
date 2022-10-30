/* eslint-disable eqeqeq */
import styled from "styled-components";

export const BoxStepNumber = styled.div<any>`
  width: 100%;
  display: grid;
  grid-template-columns: ${(p) => {
    let grid = "";
    for (let i = 1; i <= p.group; i += 1) {
      if (i % 2 === 0) {
        grid += " 1fr";
      } else {
        grid += " 40px";
      }
    }
    return grid;
  }};
  gap: 20px;
  justify-content: space-between;
`;

export const CurrentStepNumber = styled.div<any>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 40px;
  height: 40px;
  font-size: 24px;
  padding: 4px;
  border: 1px solid
    ${(p) => {
      if (typeof p.children === "object") {
        return "#169de0";
      }

      if (p.children == p.current) {
        return "#169de0";
      }

      return p.children < p.current ? "#169de0" : "#a4a9b3";
    }};
  border-radius: 50%;
  background-color: ${(p) => (p.children == p.current ? "#169de0" : "")};
  color: ${(p) => {
    if (typeof p.children === "object") {
      return "#169de0";
    }

    if (p.children == p.current) {
      return "#000";
    }

    return p.children < p.current ? "#169de0" : "#a4a9b3";
  }};

  transition: background-color 2150ms linear, color 2150ms linear,
    border-color 2150ms linear;
`;

export const Line = styled.div<any>`
  margin: 0 auto;
  width: 100%;
  height: 10px;
  border: 1px solid ${(p) => (p.step <= p.current ? "#169de0" : "#a4a9b3")};
  overflow: hidden;
  border-radius: 200px;

  align-self: center;
  transition: border-color 2150ms linear;
`;

export const BackgroundLine = styled.div<any>`
  width: 100%;
  transform: translate(${(p) => (p.step <= p.current ? "0" : "-100%")});

  height: 100%;
  background-color: #169de0;

  transition: transform 2150ms linear;
`;
