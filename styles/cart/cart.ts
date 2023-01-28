import styled from "styled-components";
import { fontFamily, fontColorPrimary, fontColorSecundary } from "../variables";

export const Cart_Top = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Cart_Middle = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 700px;
  overflow-y: scroll;
  margin: 0px 40px 0px 47px;

  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #e1e1e1;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #ffffff;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #000000;
  }
  ::-webkit-scrollbar-track {
    background: #666666;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #666666;
  }
  ::-webkit-scrollbar-track:active {
    background: #333333;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`;
export const Cart_Bottom = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Cart_Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row-reverse;
  position: absolute;

  top: 0;

  z-index: 1;

  width: 100%;
  max-width: 1440px;
  min-height: 1024px;
  height: 100%;
`;

export const Cart_Content = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  width: 486px;
  min-height: 1024px;

  background: #0f52ba;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
`;
export const Cart_TC = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  margin: 0px 0px 70px 0px;
`;
export const Cart_Price_Container = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Cart_Price_Span = styled.span`
  font-family: ${fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 15px;
  /* identical to box height, or 54% */

  color: ${fontColorPrimary};
`;
export const Cart_Finish_Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #000000;

  width: 486px;
  height: 97px;

  cursor: pointer;
`;
export const Cart_Finish_Span = styled.span`
  font-family: ${fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 15px;

  color: ${fontColorPrimary};
  cursor: pointer;
`;
export const Cart_Title_Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 56px;
  width: 180px;

  margin: 36px 0px 0px 47px;
`;
export const Cart_Title_Span = styled.span`
  font-family: ${fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 33px;

  color: ${fontColorPrimary};
`;
export const Cart_Close_Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 38px;

  margin: 39px 22px 0px 0px;

  background: #000000;

  border: none;
  border-radius: 50%;

  cursor: pointer;
`;
export const Cart_Close_Span = styled.span`
  font-family: ${fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 15px;

  cursor: pointer;

  color: ${fontColorPrimary};
`;
