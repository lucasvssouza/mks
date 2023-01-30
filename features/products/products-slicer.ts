import { IProduct } from "@/types/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Array<IProduct> = [];

export const productsSlicer = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Array<IProduct>>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setProducts } = productsSlicer.actions;
export const productReducer = productsSlicer.reducer;
