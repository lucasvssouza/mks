import { Product } from "@/types/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Array<Product> = [];

export const productsSlicer = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Array<Product>>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setProducts } = productsSlicer.actions;
export const productReducer = productsSlicer.reducer;
