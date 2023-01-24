import styled from "styled-components";

// Title //
export const MKS = styled.label`
  position: absolute;
  left: 4.51%;
  right: 86.6%;
  top: 2.73%;
  bottom: 92.97%;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 19px;

  color: #ffffff;

  mix-blend-mode: normal;
`;

export const Sistemas = styled.label`
  position: absolute;
  left: 11.46%;
  right: 74.65%;
  top: 4.39%;
  bottom: 91.31%;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 19px;

  color: #ffffff;

  mix-blend-mode: normal;
`;
// Title //
// Navbar //
export const Top_Menu = styled.nav`
  position: absolute;
  width: 1440px;
  height: 101px;
  left: 0px;
  top: 0px;
`;
// Navbar //
// Main //
export const Main = styled.div`
  position: absolute;
  width: 1440px;
  height: 1024px;
  left: 0px;
  top: 0px;

  background: #f9f9f9;
`;
// Main //
// Cart Button //
export const Cart_Button = styled.div`
  position: absolute;
  width: 90px;
  height: 45px;
  left: 1262px;
  top: 29px;

  background: #ffffff;
  border-radius: 8px;
`;

export const Cart_Vector = styled.div`
  position: absolute;
  left: 88.68%;
  right: 10%;
  top: 4.2%;
  bottom: 94.04%;

  background: #000000;
`;

export const Cart_Quantity = styled.label`
  position: absolute;
  width: 13px;
  height: 22px;
  left: 1312px;
  top: 40px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  color: #000000;
`;
// Cart Button //
// Product //
export const Product_Grid = styled.div`
  position: absolute;
  width: 938px;
  height: 601px;
  left: 247px;
  top: 217px;
`;

export const Product_Item = styled.div`
  position: absolute;
  left: 17.15%;
  right: 67.71%;
  top: 21.19%;
  bottom: 50.98%;
`;

export const Product_Image = (imgURL: string) => styled.img`
  position: absolute;
  left: 69.03%;
  right: 19.03%;
  top: 53.81%;
  bottom: 34.65%;

  background: url(imgURL);
`;
// Product //
// Footer //
export const Footer = styled.footer`
  position: absolute;
  width: 1440px;
  height: 34px;
  left: 0px;
  top: 990px;

  background: #eeeeee;
`;
export const Copyright = styled.label`
  position: absolute;
  width: 270px;
  height: 17px;
  left: 604px;
  top: 998px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  color: #000000;
`;
// Footer //
