import { Link } from "react-router-dom";

export default function Selection() {
  return (
    <>
      <Link to={"/bankorderwithdraw"}>
        <h1>Vybrat peníze</h1>
      </Link>
      <Link to={"/bankorderdeposit"}>
        <h1>Vložit Peníze</h1>
      </Link>
      <Link to={"/balance"}>
        <h1>Zůstatek</h1>
      </Link>
      <Link to={"/"}>
        <h1>Odejít</h1>
      </Link>
    </>
  );
}
