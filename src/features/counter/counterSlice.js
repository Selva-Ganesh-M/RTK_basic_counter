import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count = state.count--;
    },
    reset: (state) => {
      state.count = 0;
    },
    incByValue: (state, action) => {
      state.count = state.count + action.payload;
    },
  },
});

export const { increment, decrement, reset, incByValue } = counterSlice.actions;
export default counterSlice.reducer;
