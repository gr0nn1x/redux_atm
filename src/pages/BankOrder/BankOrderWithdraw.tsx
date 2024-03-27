import { useState } from "react";
import { remove } from "./BankSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BankType } from "./BankSlice";
import "./Bank.css";

interface BigDecimal {
  value: string;
}

export default function BankOrderWithdraw() {
  const count = useSelector((state: BankType) => state.bank.counter);
  const dispatch = useDispatch();
  const [value, setValue] = useState<BigDecimal>({ value: "0" });
  const [text, setText] = useState(false);
  const [textb, setTextb] = useState(false);

  const sumbit = (e: React.FormEvent) => {
    if (parseFloat(value.value) <= parseFloat(count.value)) {
      dispatch(remove(value));
      setTextb(true);
    }
    if (parseFloat(value.value) < 0) {
      setText(true);
    }
  };

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ value: e.target.value });
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
          <input
            type="submit"
            value="Vybrat"
            onClick={sumbit}
            className="tlacitko"
          ></input>
        </Link>
        {text && <p>Zadána nevybratelná hodnota</p>}
        {textb && <p>Částka vybrána</p>}
      </p>
    </>
  );
}
