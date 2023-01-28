import { useAppSelector } from "@/features/hooks";
import { setOpen } from "@/features/cart/cart-slicer";
import {
  Cart_Close_Container,
  Cart_Close_Span,
  Cart_Container,
  Cart_Content,
  Cart_Finish_Container,
  Cart_Finish_Span,
  Cart_Middle,
  Cart_Price_Container,
  Cart_Price_Span,
  Cart_TC,
  Cart_Title_Container,
  Cart_Title_Span,
  Cart_Top,
  Cart_Bottom,
} from "@/styles/cart/cart";
import { CartItem } from "@/types/cartItem";
import { useDispatch } from "react-redux";
import CartItemComponent from "./CartItemComponent";

export default function CartComponent() {
  const cart: Array<CartItem> = useAppSelector(
    (state) => state.cart.cartProducts
  );

  const dispatch = useDispatch();

  const onHandleCart = () => {
    dispatch(setOpen());
  };

  return (
    <Cart_Container>
      <Cart_Content>
        <Cart_Top>
          <Cart_TC>
            <Cart_Title_Container>
              <Cart_Title_Span>Carrinho</Cart_Title_Span>
              <Cart_Title_Span>de compras</Cart_Title_Span>
            </Cart_Title_Container>
            <Cart_Close_Container onClick={onHandleCart}>
              <Cart_Close_Span>X</Cart_Close_Span>
            </Cart_Close_Container>
          </Cart_TC>
          <Cart_Middle>
            {cart.map((data: CartItem, index: number) => {
              return (
                <CartItemComponent data={data} key={index} index={index} />
              );
            })}
          </Cart_Middle>
        </Cart_Top>

        <Cart_Bottom>
          <Cart_Price_Container>
            <Cart_Price_Span></Cart_Price_Span>
          </Cart_Price_Container>
          <Cart_Finish_Container>
            <Cart_Finish_Span>Finizar Compra</Cart_Finish_Span>
          </Cart_Finish_Container>
        </Cart_Bottom>
      </Cart_Content>
    </Cart_Container>
  );
}
