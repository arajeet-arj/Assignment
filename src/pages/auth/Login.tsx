import React, { useState, SyntheticEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import "./login.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  const handleLogin = (event: SyntheticEvent) => {
    event.preventDefault();
    // Your authentication logic here (e.g., API call, validation)
    // For simplicity, we'll use a simple username and password
    if (username === "user123" && password === "password123") {
      setError("");
      // Set isLoggedIn to true and redirect to home page on successful login
      // You may implement a proper authentication flow with backend integration
      // and redirect to a private dashboard page after authentication.
      localStorage.setItem("isLoggedIn", "true");
      history.push("/");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
