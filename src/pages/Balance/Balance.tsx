import { Link } from "react-router-dom";
import { BankType } from "../BankOrder/BankSlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

interface BigDecimal {
  value: string;
}

export default function Balance() {
  const [balance, setBalance] = useState<BigDecimal>({ value: "0" }); 
  const count = useSelector((state: BankType) => state.bank.counter);

  useEffect(() => {
    setBalance(count); 
  }, [count]);

  return (
    <>
      <p className="back">
        <Link to={"/selection"}>
          <h3>Zpět</h3>
        </Link>
      </p>
      <p className="center">
        <h1>Váš Zůstatek</h1>
        <h1>{balance.value}</h1> 
      </p>
    </>
  );
}
