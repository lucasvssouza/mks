import { CartItem } from "@/types/cartItem";
import {
  ICartSlicer,
  IRemoveCartSlice,
  IUpdateCartSlice,
} from "@/types/cartSlicer";
import { Product } from "@/types/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ICartSlicer = {
  quantity: 0,
  open: false,
  cartProducts: [],
};

export const cartSlicer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state: ICartSlicer, action: PayloadAction<CartItem>) => {
      state.cartProducts = [...state.cartProducts, action.payload];
      state.quantity++;
    },
    updateCart: (
      state: ICartSlicer,
      action: PayloadAction<IUpdateCartSlice>
    ) => {
      const cart = state.cartProducts;
      const oldProduct = cart[action.payload.index];

      if (action.payload.action === "+") {
        const newQuantity: number = oldProduct.quantity + 1;
        const newPrice: string = (
          parseFloat(oldProduct.finalPrice) +
          parseFloat(oldProduct.product.price)
        ).toFixed(2);

        const newProduct: CartItem = {
          quantity: newQuantity,
          product: action.payload.data,
          finalPrice: newPrice,
        };

        const newCart = [...cart];
        newCart[action.payload.index] = newProduct;
        state.cartProducts = newCart;
        state.quantity++;
      } else {
        const newQuantity: number = oldProduct.quantity - 1;
        const newPrice: string = (
          parseFloat(oldProduct.finalPrice) -
          parseFloat(oldProduct.product.price)
        ).toFixed(2);

        const newProduct: CartItem = {
          quantity: newQuantity,
          product: action.payload.data,
          finalPrice: newPrice,
        };

        const newCart = [...cart];
        newCart[action.payload.index] = newProduct;

        state.cartProducts = newCart;
        state.quantity--;
      }
    },
    setOpen: (state: ICartSlicer) => {
      state.open = !state.open;
    },
    removeCarItem: (
      state: ICartSlicer,
      action: PayloadAction<IRemoveCartSlice>
    ) => {
      state.cartProducts.splice(action.payload.index, 1);
      state.quantity = state.quantity - action.payload.quantity;
    },
  },
});

export const { setCart, setOpen, updateCart, removeCarItem } =
  cartSlicer.actions;
export const cartReducer = cartSlicer.reducer;
