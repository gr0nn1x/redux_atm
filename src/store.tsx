import { configureStore } from "@reduxjs/toolkit";
import BankSlice from "./pages/BankOrder/BankSlice";

export default configureStore({
  reducer: { bank: BankSlice },
});
