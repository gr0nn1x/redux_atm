import { useState } from "react";
import { add } from "./BankSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function BankOrderDeposit() {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const sumbit = (e: React.FormEvent) => {
    dispatch(add(value));
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
        <input type="number" placeholder="Zadejte částku" onChange={change} className="maininput"/>
      </form>
      <Link to={""}>
        <input type="submit" value="Vložit" onClick={sumbit}></input>
      </Link>
    </>
  );
}
