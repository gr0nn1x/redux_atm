import { useState } from "react";
import { remove } from "./BankSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BankType } from "./BankSlice";

export default function BankOrderWithdraw() {
  const count = useSelector((state: BankType) => state.bank.counter);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const sumbit = (e: React.FormEvent) => {
    if (value <= count) {
      dispatch(remove(value));
    }
  };

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.valueAsNumber);
  };

  return (
    <>
      <Link to={"/selection"}>
        <h3>Zpět</h3>
      </Link>
      <form>
        <input
          type="number"
          placeholder="Zadejte částku"
          onChange={change}
          className="maininput"
        />
      </form>
      <Link to={""}>
        <input type="submit" value="Vybrat" onClick={sumbit}></input>
      </Link>
    </>
  );
}
