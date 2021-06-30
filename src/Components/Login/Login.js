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
    <section
      className="login"
      style={{
        border: "1px solid grey",
        paddingTop: "0rem",
        paddingBottom: "3rem",
        padding: "3rem",
        maxWidth: "30rem",
        margin: "0 auto",
        borderRadius: "5px",
      }}
    >
      <div
        style={{ fontSize: "3rem", marginBottom: "2rem", marginTop: "2rem" }}
      >
        DO IT
      </div>
      <div className="loginContainer">
        <label style={{ marginRight: "1rem", fontSize: "1.2rem" }}>
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
        <label style={{ marginRight: "1rem", fontSize: "1.2rem" }}>
          Password
        </label>
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
              <p style={{ fontSize: "1rem" }} className="loginText">
                Don't have an account ?
                <span
                  className="handleHover"
                  onClick={() => {
                    setHasAccout(!hasAccount);
                  }}
                  style={{ color: "blue" }}
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
                  className="handleHover"
                  style={{ color: "blue" }}
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
