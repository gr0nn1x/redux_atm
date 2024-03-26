import { useState } from "react";
import { remove } from "./BankSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function BankOrderWithdraw() {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const sumbit = (e: React.FormEvent) => {
    dispatch(remove(value));
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
        <input type="number" placeholder="Zadejte částku" onChange={change} />
      </form>
      <Link to={""}>
        <input type="submit" value="Vybrat" onClick={sumbit}></input>
      </Link>
    </>
  );
}
