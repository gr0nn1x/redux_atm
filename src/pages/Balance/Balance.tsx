import { Link } from "react-router-dom";
import { BankType } from "../BankOrder/BankSlice";
import { useSelector } from "react-redux";

export default function Balance() {
  const count = useSelector((state: BankType) => state.bank.counter);

  return (
    <>
      <Link to={"/selection"}>
        <h3>Zpět</h3>
      </Link>
      <h1>Váš Zůstatek</h1>
      <h1>{count}</h1>
    </>
  );
}
