import React, { useState } from "react";
import "../../css/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
              placeholder="Enter passoword"
              className="label"
            >
              Password{" "}
            </label>

            <input
              type="text"
              className="input"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <br />
          </div>

          <button type="button" id="button" onClick={loginHandle}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
