import { ICartItem } from "./cartItem";
import { IProduct } from "./product";

export interface ICartSlicer {
  quantity: number;
  open: boolean;
  cartProducts: Array<ICartItem>;
}

export interface IUpdateCartSlice {
  index: number;
  data: IProduct;
  action: string;
}

export interface IRemoveCartSlice {
  index: number;
  quantity: number;
}
