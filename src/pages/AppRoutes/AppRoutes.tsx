import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Selection from "../Selection.tsx/Selection";
import BankOrderDeposit from "../BankOrder/BankOrderDeposit";
import BankOrderWithdraw from "../BankOrder/BankOrderWithdraw";
import Balance from "../Balance/Balance";
import NavBar from "../../components/NavBar/NavBar";

export default function AppRoutes() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/bankorderdeposit" element={<BankOrderDeposit />} />
        <Route path="/bankorderwithdraw" element={<BankOrderWithdraw />} />
        <Route path="/balance" element={<Balance />} />
      </Routes>
    </HashRouter>
  );
}
