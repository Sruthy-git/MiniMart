import "./Login.css";

function Login() {

  return (

    <div className="login-container">

      <div className="login-box">

        <h1>Login</h1>

        <p>Welcome back to MiniMart</p>

        <form>

          <input type="email" placeholder="Enter your email" />

          <input type="password" placeholder="Enter your password" />

          <button type="submit">Login</button>

        </form>

      </div>

    </div>

  )

}

export default Login