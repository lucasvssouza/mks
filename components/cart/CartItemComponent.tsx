import { removeCarItem, updateCart } from "@/features/cart/cart-slicer";
import {
  Cart_Item_Container,
  Cart_Item_Image,
  Cart_Item_Name,
  Cart_Item_Price,
  Cart_Item_Remove,
  Cart_Item_Row,
  Cart_Quantity_Value,
  Cart_Quantity_Change,
  Cart_Quantity_Container,
  Cart_Quantity_Span,
  Cart_Quantity_Button,
} from "@/styles/cart/cartItem";
import { ICartItem } from "@/types/cartItem";
import { useDispatch } from "react-redux";

export default function CartItemComponent(product: {
  data: ICartItem;
  index: number;
  key: number;
}) {
  const { data, index } = product;

  const dispatch = useDispatch();

  const onHandleMinus = () => {
    if (data.quantity > 1) {
      dispatch(
        updateCart({
          index: index,
          data: data.product,
          action: "-",
        })
      );
    } else {
      dispatch(
        removeCarItem({
          index: index,
          quantity: 1,
        })
      );
    }
  };

  const onHandlePlus = () => {
    dispatch(
      updateCart({
        index: index,
        data: data.product,
        action: "+",
      })
    );
  };

  const onHandleRemove = () => {
    dispatch(removeCarItem({ index: index, quantity: data.quantity }));
  };

  return (
    <Cart_Item_Container>
      <Cart_Item_Row>
        <Cart_Item_Image src={data.product.photo} />
        <Cart_Item_Name>
          {data.product.brand} {data.product.name}
        </Cart_Item_Name>
      </Cart_Item_Row>
      <Cart_Quantity_Container>
        <Cart_Quantity_Span>Qtd:</Cart_Quantity_Span>
        <Cart_Quantity_Change>
          <Cart_Quantity_Button onClick={onHandleMinus}>-</Cart_Quantity_Button>
          <Cart_Quantity_Value>{data.quantity}</Cart_Quantity_Value>
          <Cart_Quantity_Button onClick={onHandlePlus}>+</Cart_Quantity_Button>
        </Cart_Quantity_Change>
      </Cart_Quantity_Container>
      <Cart_Item_Row>
        <Cart_Item_Price>R${data.finalPrice.split(".00")}</Cart_Item_Price>
        <Cart_Item_Remove onClick={onHandleRemove}>X</Cart_Item_Remove>
      </Cart_Item_Row>
    </Cart_Item_Container>
  );
}
