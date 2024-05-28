import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const signinHandler = (event) => {
    event.preventDefault(); 

    setMessage("Loading...");
    if (email === "abcd@gmail.com" && password === "abcd123") {
      setTimeout(() => {
        setMessage("Successfully logged in");
      }, 3000);
    } else {
      setTimeout(() => {
        setMessage("Invalid");
      }, 3000);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 bg-light" style={{ width: "100%", maxWidth: "400px" }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Login</h2>
          <form onSubmit={signinHandler}>
            <div className="form-group mt-3 text-start">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control mt-2"
                id="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3 text-start">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control mt-2"
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block mt-3"
            >
              Sign in
            </button>
          </form>
        </div>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Login;
