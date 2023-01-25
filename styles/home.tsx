import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
}
  body {
    width:100%;
    background: #f9f9f9;
  }
`;

// Main //
export const Main = styled.main`
  display: flex;
  align-items: center;

  flex-direction: column;

  width: 100%;
  height: 1024px;
`;
// Main //
// Navbar //
export const Navbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  background: #0f52ba;
`;
export const Nav_Container = styled.div`
  width: 1440px;
  height: 101px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
// Navbar //
// Title //
export const Title_Container = styled.div`
  display: flex;
  align-items: baseline;
  margin-left: 65px;
`;
export const Title_MKS = styled.label`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 19px;
  /* or 48% */

  color: #ffffff;

  mix-blend-mode: normal;
`;

export const Title_Sistemas = styled.label`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 19px;

  color: #ffffff;

  mix-blend-mode: normal;
`;
// Title //
// Cart Button //
export const Cart_Button = styled.button`
  display: flex;
  align-items: center;

  cursor: pointer;

  width: 90px;
  height: 45px;

  margin-right: 88px;

  background: #ffffff;
  border-radius: 8px;
  border: none;
`;
export const Cart_SVG = styled.svg`
  width: 20px;
  height: 18px;
  margin: 0 16px;
`;
export const Cart_Quantity = styled.label`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  cursor: pointer;

  color: #000000;
`;
// Cart Button //
// Product //
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

export const Product_Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  width: 218px;
  height: 285px;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  background-color: #fff;
  border-radius: 8px;
`;
export const Product_Image = styled.img`
  height: 138px;
  margin-top: 18px;
`;
export const Product_Middle_Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Product_Middle_Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const Product_Name = styled.label`
  font-family: "Montserrat";
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
export const Product_Price_Label = styled.label`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  padding-right: 6.5px;

  color: #ffffff;
`;
export const Product_Description = styled.label`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;

  width: 192px;
  height: 25px;

  color: #2c2c2c;
`;
export const Product_Buy = styled.div`
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
export const Product_Buy_Label = styled.label`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;

  margin-left: 14px;
  cursor: pointer;

  color: #ffffff;
`;
// Product //
// Footer //
export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 34px;

  background: #eeeeee;
`;
export const Copyright = styled.label`
  width: 270px;
  height: 17px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  color: #000000;
`;
// Footer //
