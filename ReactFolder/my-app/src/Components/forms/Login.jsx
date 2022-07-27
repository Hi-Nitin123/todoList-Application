import React, { useState } from "react";
import "../../css/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../css/SignUp.css";
// import { useForm } from "react-hook-form";
import validator from "validator";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ emaileError: "", passwordError: "" });
  const [checked, setChecked] = useState({
    emailChecked: false,
    passwordChecked: false,
  });

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({ mode: "onSubmit" });

  const handleSignUp = () => {
    navigate("/register");
  };

  const loginHandle = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/login", { email, password })
      .then((res) => {
        if (res.data.access === "Block") {
          if (res.data.myRole === "admin") {
            localStorage.setItem("token", res.data.token);
            navigate("/admin");
          } else {
            localStorage.setItem("token", res.data.token);
            navigate("/MyTodoList");
          }
        } else {
          navigate("/blocked");
        }
      })
      .catch((err) => {
        alert(`${err.response.data.error}`);
        console.log(err.response.data.error);
      });
  };

  const handleEmailError = () => {
    if (validator.isEmpty(email)) {
      setErrors((pre) => {
        return { ...pre, emaileError: "this is a required field" };
      });
    } else {
      if (!validator.isEmail(email)) {
        setErrors((pre) => {
          return { ...pre, emaileError: "This is not a valid email" };
        });
      } else {
        setErrors((pre) => {
          return { ...pre, emaileError: "" };
        });
        setChecked((pre) => {
          return { ...pre, emailChecked: true };
        });
      }
    }
  };

  const handlePasswordError = () => {
    if (validator.isEmpty(password)) {
      setErrors((pre) => {
        return { ...pre, passwordError: "this is a required field" };
      });
    } else {
      setErrors((pre) => {
        return { ...pre, passwordError: "" };
      });

      setChecked((pre) => {
        return { ...pre, passwordChecked: true };
      });
    }
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
              name="email"
              onBlur={() => {
                handleEmailError();
              }}
              // {...register("email", {
              //   required: "Email is required",

              //   minLength: {
              //     value: 10,
              //     message: "Your email name should have atleat 10 characters",
              //   },
              //   pattern: {
              //     value: "^[a-zA-Z0-9]{3,30}$",
              //     message: "this email is not valid",
              //   },
              // })}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <small className="text-danger">{errors.emaileError}</small>
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
              name="pswd"
              onBlur={() => handlePasswordError()}
              // {...register("pswd", {
              //   required: "Password is required",
              //   minLength: {
              //     value: 8,
              //     message: "Your password name should have atleat 8 characters",
              //   },
              // })} onClick={(e) => {

              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <small className="text-danger">{errors.passwordError}</small>
            <br />
          </div>

          <button
            type="button"
            id="loginBtn"
            onClick={(e) => {
              checked.emailChecked && checked.passwordChecked
                ? loginHandle(e)
                : alert(`Please fill all the details properly before proceed`);
            }}
          >
            Login
          </button>
          <br />
          <br />
          <label htmlFor="signUp">Not registered yet?</label>
          <button
            onClick={() => {
              handleSignUp();
            }}
            id="notRegistered"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
