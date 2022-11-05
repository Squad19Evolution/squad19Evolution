import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="Login" >
      <input type="text" placeholder="login" />
      <input type="password" name="" id="" placeholder="senha" />
      <Link to="/dashboard">
        <button>Login</button>
      </Link>
    </div>
  );
}

export default Login;