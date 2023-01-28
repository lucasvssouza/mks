import styled, { createGlobalStyle } from "styled-components";
import { fontFamily, fontColorPrimary, fontColorSecundary } from "./variables";

/* Main */
export const Main = styled.main`
  display: flex;
  align-items: center;

  flex-direction: column;

  width: 100%;
  min-height: 1024px;
`;
export const Main_Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;

  margin-top: -101px;

  width: 100%;
  min-height: 1024px;
  max-width: 1440px;
`;
export const Product_Grid = styled.div`
  display: grid;
  gap: 30px 22.5px;
  grid-template-columns: repeat(4, 1fr);

  margin: 116px 0px 172px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 740px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
/* Main */
