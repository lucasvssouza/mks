import styled from "styled-components";
import { fontColorPrimary, fontFamily } from "../variables";

/* Product */
export const Product_Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  height: 290px;
  width: 218px;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  background: #ffffff;
  border-radius: 8px;
`;
export const Product_Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Product_Image = styled.img`
  height: 124px;
  width: 124px;
  margin-top: 18px;
`;
export const Product_Middle_Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 14px 6px 8px 7px;
`;
export const Product_Middle_Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const Product_Name = styled.span`
  font-family: ${fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  height: 38px;
  margin-right: 4px;
  flex: 2;

  color: #2c2c2c;
`;
export const Product_Price = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: #373737;
  border-radius: 5px;
  height: 18px;
  flex: 1;

  padding: 4px 0px 4px 6.5px;
`;
export const Product_Price_Span = styled.span`
  font-family: ${fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  padding-right: 6.5px;

  color: ${fontColorPrimary};
`;
export const Product_Description = styled.span`
  font-family: ${fontFamily};
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;

  width: 192px;
  height: 25px;

  color: #2c2c2c;
`;
export const Product_Buy_Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  width: 218px;
  height: 32px;

  background: #0f52ba;
  border-radius: 0px 0px 8px 8px;
`;
export const Product_Buy_SVG = styled.svg`
  width: 14px;
  height: 16px;
  cursor: pointer;
`;
export const Product_Buy_Span = styled.span`
  font-family: ${fontFamily};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;

  margin-left: 14px;
  cursor: pointer;

  color: ${fontColorPrimary};
`;
/* Product */
