import { setLoading } from "@/features/products/loading-slicer";
import {
  Cart_Close,
  Cart_Close_Label,
  Cart_Container,
  Cart_Content,
  Cart_Finish,
  Cart_Finish_Label,
  Cart_Price,
  Cart_Price_Label,
  Cart_Title,
  Cart_Title_Label,
  Cart_Top,
} from "@/styles/checkout";
import { useDispatch } from "react-redux";

export default function CartComponent() {
  const dispatch = useDispatch();

  const onHandleCart = () => {
    dispatch(setLoading());
  };

  return (
    <Cart_Container>
      <Cart_Content>
        <Cart_Top>
          <Cart_Title>
            <Cart_Title_Label>Carrinho</Cart_Title_Label>
            <Cart_Title_Label>de compras</Cart_Title_Label>
          </Cart_Title>
          <Cart_Close onClick={onHandleCart}>
            <Cart_Close_Label>X</Cart_Close_Label>
          </Cart_Close>
        </Cart_Top>
        <div>
          <Cart_Price>
            <Cart_Price_Label></Cart_Price_Label>
          </Cart_Price>
          <Cart_Finish>
            <Cart_Finish_Label>Finizar Compra</Cart_Finish_Label>
          </Cart_Finish>
        </div>
      </Cart_Content>
    </Cart_Container>
  );
}
