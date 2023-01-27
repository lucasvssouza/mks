import { CartItem } from "./cartItem";
import { Product } from "./product";

export interface ICartSlicer {
  quantity: number;
  open: boolean;
  cartProducts: Array<CartItem>;
}

export interface IUpdateCartSlice {
  index: number;
  data: Product;
  action: string;
}

export interface IRemoveCartSlice {
  index: number;
  quantity: number;
}
