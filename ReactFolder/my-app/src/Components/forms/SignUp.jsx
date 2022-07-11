import React, { useState } from "react";
import "../../css/SignUp.css";
import axios from "axios";

function SignUp() {
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");

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

  const handleSubmit = (e) => {
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
  };

  return (
    <div id="signUpForm">
      <form id="form">
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
          />
          <br />
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
          <br />

          <label htmlFor="signUp" className="label">
            {" "}
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
          <label htmlFor="signUp" className="label">
            Confirm password
          </label>
          <input
            type="text"
            className="input"
            value={confirmPassword}
            onChange={(e) => {
              setConfirm(e.target.value);
            }}
          />
          <br />
          <br />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
