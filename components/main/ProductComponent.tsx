import { useAppSelector } from "@/features/hooks";
import { setCart, updateCart } from "@/features/cart/cart-slicer";
import {
  Product_Buy_Container,
  Product_Buy_Span,
  Product_Buy_SVG,
  Product_Image,
  Product_Item,
  Product_Middle_Row,
  Product_Middle_Column,
  Product_Name,
  Product_Price,
  Product_Price_Span,
  Product_Description,
  Product_Column,
} from "@/styles/main/product";
import { CartItem } from "@/types/cartItem";
import { Product } from "@/types/product";
import { useDispatch } from "react-redux";

export default function ProductComponent(product: {
  data: Product;
  key: number;
}) {
  const cart: Array<CartItem> = useAppSelector(
    (state) => state.cart.cartProducts
  );
  const dispatch = useDispatch();
  const { data } = product;

  const onHandleProduct = () => {
    if (cart.find(({ product }) => product.id === data.id)) {
      const old = cart.find(({ product }) => product.id === data.id);
      const index = cart.indexOf(old!);

      dispatch(
        updateCart({
          index: index,
          data: data,
          action: "+",
        })
      );
    } else {
      dispatch(setCart({ quantity: 1, product: data, finalPrice: data.price }));
    }
  };

  return (
    <Product_Item>
      <Product_Column>
        <Product_Image src={data.photo} />

        <Product_Middle_Column>
          <Product_Middle_Row>
            <Product_Name>
              {data.brand} {data.name}
            </Product_Name>
            <Product_Price>
              <Product_Price_Span>
                R${data.price.split(".00")}
              </Product_Price_Span>
            </Product_Price>
          </Product_Middle_Row>
          <Product_Description>{data.description}</Product_Description>
        </Product_Middle_Column>
      </Product_Column>

      <Product_Buy_Container onClick={onHandleProduct}>
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
        <Product_Buy_Span>COMPRAR</Product_Buy_Span>
      </Product_Buy_Container>
    </Product_Item>
  );
}
