import { useAppSelector } from "@/features/hooks";
import { setOpen } from "@/features/products/cart-slicer";
import {
  Cart_Close,
  Cart_Close_Span,
  Cart_Container,
  Cart_Content,
  Cart_Finish,
  Cart_Finish_Span,
  Cart_Middle,
  Cart_Price,
  Cart_Price_Span,
  Cart_TC,
  Cart_Title,
  Cart_Title_Span,
  Cart_Top,
} from "@/styles/checkout";
import { CartItem } from "@/types/cartItem";
import { useDispatch } from "react-redux";
import ProductCartComponent from "./ProductCartComponent";

export default function CartComponent() {
  const cart: Array<CartItem> = useAppSelector((state) => state.cart.cartProducts);

  const dispatch = useDispatch();

  const onHandleCart = () => {
    dispatch(setOpen());
  };

  return (
    <Cart_Container>
      <Cart_Content>
        <Cart_Top>
          <Cart_TC>
            <Cart_Title>
              <Cart_Title_Span>Carrinho</Cart_Title_Span>
              <Cart_Title_Span>de compras</Cart_Title_Span>
            </Cart_Title>
            <Cart_Close onClick={onHandleCart}>
              <Cart_Close_Span>X</Cart_Close_Span>
            </Cart_Close>
          </Cart_TC>
          <Cart_Middle>
            {cart.map((data: CartItem, index: number) => {
              return (
                <ProductCartComponent data={data} key={index} index={index} />
              );
            })}
          </Cart_Middle>
        </Cart_Top>

        <div>
          <Cart_Price>
            <Cart_Price_Span></Cart_Price_Span>
          </Cart_Price>
          <Cart_Finish>
            <Cart_Finish_Span>Finizar Compra</Cart_Finish_Span>
          </Cart_Finish>
        </div>
      </Cart_Content>
    </Cart_Container>
  );
}
