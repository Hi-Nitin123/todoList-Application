import React, { useState } from "react";
import "../../css/SignUp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";

function SignUp() {
  const navigate = useNavigate();
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");
  // const { register, handleSubmit, errors } = useForm();

  // useEffect((e) => {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:8000/signUp", {
  //       firstName,
  //       lastName,
  //       email,
  //       password,
  //       confirmPassword,
  //     })
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/signUp", {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    navigate("/login");
  };

  return (
    <div id="signUpForm">
      <form id="form">
        <div id="signUpTag">
          <label htmlFor="register" id="register">
            Sign Up
          </label>
        </div>
        <br />

        <div>
          <label htmlFor="signUp" className="label">
            {" "}
            First name
          </label>
          <input
            type="text"
            className="input"
            value={firstName}
            onChange={(e) => {
              setFname(e.target.value);
            }}
            //   ref={register({
            //     required: 'name is required.',
            //     minLength: {
            //       value: 6,
            //       message: 'Password should be at-least 6 characters.'
            //     }

            //  })}
          />
          <br />

          <label htmlFor="signUp" className="label">
            {" "}
            Last name
          </label>
          <input
            type="text"
            className="input"
            value={lastName}
            onChange={(e) => {
              setLname(e.target.value);
            }}
          />
          <br />

          <label htmlFor="signUp" className="label">
            {" "}
            Email{" "}
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

          <label htmlFor="signUp" className="label">
            {" "}
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

          <label htmlFor="signUp" className="label">
            Confirm password
          </label>
          <input
            type="password"
            className="input"
            value={confirmPassword}
            onChange={(e) => {
              setConfirm(e.target.value);
            }}
          />
          <br />

          <button onClick={handleFormSubmit} id="submitBtn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
