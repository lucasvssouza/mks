import styled from "styled-components";
import { fontFamily, fontColorPrimary } from "./variables";

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
export const Cart_Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`;
export const Cart_Bottom = styled.div``;
export const Cart_Price = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Cart_Price_Label = styled.label`
  font-family: ${fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 15px;
  /* identical to box height, or 54% */

  color: ${fontColorPrimary};
`;
export const Cart_Finish = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #000000;
  
  width: 486px;
  height: 97px;

  cursor: pointer;
`;
export const Cart_Finish_Label = styled.label`
  font-family: ${fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 15px;

  color: ${fontColorPrimary};
  cursor: pointer;
`;
export const Cart_Title = styled.div`
  display: flex;
  flex-direction: column;
  height: 56px;
  width: 180px;

  margin: 36px 0px 0px 47px;
`;
export const Cart_Title_Label = styled.label`
  font-family: ${fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 33px;

  color: ${fontColorPrimary};
`;
export const Cart_Close = styled.button`
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
export const Cart_Close_Label = styled.label`
  font-family: ${fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 15px;

  cursor: pointer;

  color: ${fontColorPrimary};
`;
