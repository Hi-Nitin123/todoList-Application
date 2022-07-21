import React, { useState } from "react";
import "../../css/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../css/SignUp.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    navigate("/register");
  };

  const loginHandle = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/login", { email, password })
      .then((res) => {
        console.log(res);
        if (res.data.access === "Block") {
          if (res.data.myRole === "admin") {
            localStorage.setItem("token", res.data.token);
            navigate("/admin");
          } else {
            localStorage.setItem("token", res.data.token);
            navigate("/MyTodoList");
          }
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div style={{ height: "100%" }}>
      <div className="loginForm">
        <form action="">
          <div id="credentials">
            <label htmlFor="login" placeholder="Enter email" className="label">
              Email
            </label>
            <input
              type="text"
              className="input"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <br />

            <label
              htmlFor="login"
              type="text"
              placeholder="Enter passoword"
              className="label"
            >
              Password{" "}
            </label>

            <input
              type="password"
              className="input"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <br />
          </div>

          <button type="button" id="loginBtn" onClick={loginHandle}>
            Login
          </button>
          <br />
          <br />
          <label htmlFor="signUp">Not registered yet?</label>
          <button onClick={handleSignUp} id="notRegistered">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
