import { Cart } from "@/types/cart";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Array<Cart> = [];

export const cartSlicer = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<Cart>) => {
      state = [...state, action.payload]
      console.log(state)
      return state;
    },
  },
});

export const { setCart } = cartSlicer.actions;
export const cartReducer = cartSlicer.reducer;
