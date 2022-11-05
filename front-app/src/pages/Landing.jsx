import { Link } from "react-router-dom";
import Login from "./Login";

function Landing() {
  return (
    <div>
      <h1>landing</h1>
      <Link to="/Login">
        <button>Login</button>
      </Link>
    </div>
  );
}

export default Landing;