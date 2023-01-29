import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = false;

export const loadingSlicer = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state:boolean, action:PayloadAction<boolean>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setLoading } = loadingSlicer.actions;
export const loadingReducer = loadingSlicer.reducer;
