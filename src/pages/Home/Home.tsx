import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <>
      <p className="center">
        <Link to={"/selection"}>
          <h1 className="nadpis">Vstoupit do systému</h1>
        </Link>
      </p>
    </>
  );
}
