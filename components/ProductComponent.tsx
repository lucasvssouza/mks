import { setCart } from "@/features/products/cart-slicer";
import {
  Product_Buy,
  Product_Buy_Label,
  Product_Buy_SVG,
  Product_Image,
  Product_Item,
  Product_Middle_Row,
  Product_Middle_Column,
  Product_Name,
  Product_Price,
  Product_Price_Label,
  Product_Description,
} from "@/styles/home";
import { Product } from "@/types/product";
import { useDispatch } from "react-redux";

export default function ProductComponent(product: { data: Product }) {
  const { data } = product;
  const dispatch = useDispatch();

  const onHandleProduct = () => {
    dispatch(setCart({ quantity: 1, product: data, finalPrice: data.price }));
  };

  return (
    <Product_Item>
      <Product_Image src={data.photo} />
      <Product_Middle_Column>
        <Product_Middle_Row>
          <Product_Name>
            {data.brand} {data.name}
          </Product_Name>

          <Product_Price>
            <Product_Price_Label>R$</Product_Price_Label>
            <Product_Price_Label>{data.price.split(".00")}</Product_Price_Label>
          </Product_Price>
        </Product_Middle_Row>
        <Product_Description>{data.description}</Product_Description>
      </Product_Middle_Column>

      <Product_Buy onClick={onHandleProduct}>
        <Product_Buy_SVG
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.737212"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 1L1 3.7V13.15C1 13.8956 1.59695 14.5 2.33333 14.5H11.6667C12.403 14.5 13 13.8956 13 13.15V3.7L11 1H3Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.737212"
            d="M1 4.375H13"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.737212"
            d="M10 7C10 8.24264 8.82475 9.25 7.375 9.25C5.92525 9.25 4.75 8.24264 4.75 7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Product_Buy_SVG>
        <Product_Buy_Label>COMPRAR</Product_Buy_Label>
      </Product_Buy>
    </Product_Item>
  );
}
