import { createSlice } from "@reduxjs/toolkit";

export const BankSlice = createSlice({
  name: "bank",
  initialState: { counter: 0 },
  reducers: {
    add: (state, action) => {
      state.counter = state.counter + action.payload;
      console.log(state.counter);
    },
    remove: (state, action) => {
      state.counter = state.counter - action.payload;
      console.log(state.counter);
    },
  },
});

export const { add, remove } = BankSlice.actions;

export default BankSlice.reducer;

export type BankType = { bank: { counter: number } };
