import styled from "styled-components";
import { fontColorSecundary, fontFamily } from "../variables";

/* Footer */
export const Footer_Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 34px;
  margin-top: -34px;

  background: #eeeeee;
`;
export const Footer_Copyright = styled.span`
  width: 270px;
  height: 17px;

  font-family: ${fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  color: ${fontColorSecundary};
`;
/* Footer */
