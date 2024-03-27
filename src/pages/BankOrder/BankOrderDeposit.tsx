import { useState } from "react";
import { add } from "./BankSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Bank.css"

export default function BankOrderDeposit() {
  const dispatch = useDispatch();
  const [text, setText] = useState(false);
  const [textb, setTextb] = useState(false);
  const [value, setValue] = useState(0);
  const sumbit = (e: React.FormEvent) => {
    if (value > 0) {
      dispatch(add(value));
      setTextb(true);
    }
    if (value < 0) {
      setText(true);
    }
  };

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.valueAsNumber);
  };

  return (
    <>
      <p className="back">
        <Link to={"/selection"}>
          <h3>Zpět</h3>
        </Link>
      </p>
      <p className="center">
        <form>
          <input
            type="number"
            placeholder="Zadejte částku"
            onChange={change}
            className="maininput"
          />
        </form>
        <Link to={""}>
          <input type="submit" value="Vložit" onClick={sumbit} className="tlacitko"></input>
        </Link>
        {text && <p>Zadána nevložitelná hodnota</p>}
        {textb && <p>Částka vložena</p>}
      </p>
    </>
  );
}
