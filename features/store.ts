import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./products/cart-slicer";
import { loadingReducer } from "./products/loading-slicer";
import { productReducer } from "./products/products-slicer";

export const store = configureStore({
  reducer: {
    products: productReducer,
    loading: loadingReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
