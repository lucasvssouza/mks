import styled from "styled-components";
import { fontColorPrimary, fontColorSecundary, fontFamily } from "../variables";

/* Navbar */
export const Nav_Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1;

  width: 100%;

  height: 101px;
  background: #0f52ba;
`;
export const Nav_Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 1440px;
`;
/* Navbar */
/* Title */
export const Nav_Title_Container = styled.div`
  display: flex;
  align-items: baseline;
  margin-left: 65px;
`;
export const Nav_Title_MKS = styled.span`
  font-family: ${fontFamily};
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 19px;

  color: ${fontColorPrimary};
  mix-blend-mode: normal;
`;

export const Nav_Title_Sistemas = styled.span`
  font-family: ${fontFamily};
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 19px;

  color: ${fontColorPrimary};
  mix-blend-mode: normal;
`;
/* Title */
/* Cart Button */
export const Nav_Cart_Button = styled.button`
  display: flex;
  align-items: center;

  width: 90px;
  height: 45px;
  margin: 0px 88px 0px 40px;

  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;
export const Nav_Cart_SVG = styled.svg`
  width: 20px;
  height: 18px;
  margin: 0px 16px;
`;
export const Nav_Cart_Quantity = styled.span`
  font-family: ${fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  color: ${fontColorSecundary};
  cursor: pointer;
`;
/* Cart Button */