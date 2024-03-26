import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Link to={"/selection"}>
        <h1>Vstoupit do systému</h1>
      </Link>
    </>
  );
}
