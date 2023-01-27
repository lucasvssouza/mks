import styled from "styled-components";
import { fontFamily } from "./variables";

/* Loading */
export const Loading_Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;
export const Loading_Span = styled.span`
  font-family: ${fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 30px;

  color: rgb(0, 0, 0);

  animation: text 2s ease-in-out infinite;

  @keyframes text {
    0% {
      color: rgb(0, 0, 0);
    }
    25% {
      color: rgb(75, 75, 75);
    }
    50% {
      color: rgb(150, 150, 150);
    }
    75% {
      color: rgb(75, 75, 75);
    }
    100% {
      color: rgb(0, 0, 0);
    }
  }
`;
export const Loading_Animation = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;

  animation: ring 2s linear infinite;

  @keyframes ring {
    0% {
      transform: rotate(0deg);
      box-shadow: 0px 5px 5px rgb(255, 255, 0);
    }
    25% {
      transform: rotate(90deg);
      box-shadow: 0px 5px 5px rgb(0, 255, 255);
    }
    50% {
      transform: rotate(180deg);
      box-shadow: 0px 5px 5px rgb(255, 0, 255);
    }
    75% {
      transform: rotate(270deg);
      box-shadow: 0px 5px 5px rgb(0, 255, 255);
    }
    100% {
      transform: rotate(360deg);
      box-shadow: 0px 5px 5px rgb(255, 255, 0);
    }
  }

  ::before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    border-radius: 50%;

    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.3);
  }
`;
/* Loading */