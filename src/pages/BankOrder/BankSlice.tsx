import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface BankState {
  counter: BigDecimal;
}

export const BankSlice = createSlice({
  name: "bank",
  initialState: { counter: { value: "0" } } as BankState, 
  reducers: {
    add: (state, action: PayloadAction<BigDecimal>) => {

      state.counter = {
        value: (
          parseFloat(state.counter.value) + parseFloat(action.payload.value)
        ).toString(),
      };
      console.log(state.counter);
    },
    remove: (state, action: PayloadAction<BigDecimal>) => {
  
      state.counter = {
        value: (
          parseFloat(state.counter.value) - parseFloat(action.payload.value)
        ).toString(),
      };
      console.log(state.counter);
    },
  },
});

export const { add, remove } = BankSlice.actions;

export default BankSlice.reducer;

export type BankType = { bank: BankState };

interface BigDecimal {
  value: string;
}
