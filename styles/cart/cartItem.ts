import styled from "styled-components";
import { fontColorPrimary, fontColorSecundary, fontFamily } from "../variables";

/* Cart Item */
export const Cart_Item_Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Cart_Item_Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 379px;
  min-height: 95px;

  margin: 10px 0px 18px 0px;

  background: #ffffff;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;
export const Cart_Item_Image = styled.img`
  width: 65px;
  height: 65px;

  margin: 0px 0px 0px 20px;
`;
export const Cart_Item_Name = styled.span`
  display: flex;
  align-items: center;

  font-family: ${fontFamily};
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  color: ${fontColorSecundary};

  height: 33px;
  width: 113px;
`;
export const Cart_Quantity_Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Cart_Quantity_Span = styled.span`
  font-family: ${fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 5px;
  line-height: 6px;
`;
export const Cart_Quantity_Change = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  background: #ffffff;
  border: 0.3px solid #bfbfbf;
  border-radius: 4px;

  height: 19px;
  width: 50px;
`;
export const Cart_Quantity_Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: ${fontColorSecundary};

  border: none;
  cursor: pointer;

  width: 5px;
  height: 5px;
`;
export const Cart_Quantity_Value = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10px;
  width: 10px;

  font-family: ${fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 10px;

  margin: 0px 7px 0px 7px;

  color: ${fontColorSecundary};
`;
export const Cart_Item_Price = styled.span`
  font-family: ${fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  margin: 0px 15px 0px 0px;

  color: ${fontColorSecundary};
`;
export const Cart_Item_Remove = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: black;
  border: none;
  cursor: pointer;

  height: 18px;
  width: 18px;
  border-radius: 50%;

  margin: -92px -7px 0px 0px;

  font-family: ${fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 17px;
  color: ${fontColorPrimary};
`;
/* Cart Item */
