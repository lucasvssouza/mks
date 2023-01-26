import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = false;

export const loadingSlicer = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state) => {
      state = !state;
      return state;
    },
  },
});

export const { setLoading } = loadingSlicer.actions;
export const loadingReducer = loadingSlicer.reducer;
