import React from "react";
import "./Login.css";
const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccout,
    emailError,
    passwordError,
  } = props;
  return (
    <section className="login">
      <div className="appTitle">DO IT</div>
      <div className="loginContainer">
        <label className="loginLabel">
          Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p className="errorMsg">{emailError}</p>
        <label className="loginLabel">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button className="btn btn-success" onClick={handleLogin}>
                Sign In
              </button>
              <p className="loginText">
                Don't have an account ?
                <span
                  className="handleHover signButton"
                  onClick={() => {
                    setHasAccout(!hasAccount);
                  }}
                >
                  Sign Up
                </span>{" "}
              </p>
            </>
          ) : (
            <>
              <button className="btn btn-success" onClick={handleSignUp}>
                Sign Up
              </button>
              <p className="loginText">
                Have an account ?
                <span
                  onClick={() => {
                    setHasAccout(!hasAccount);
                  }}
                  className="handleHover signButton"
                >
                  Sign In
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
