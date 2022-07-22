import React, { useState } from "react";
import "../../css/SignUp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function SignUp() {
  const navigate = useNavigate();
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
    // e.preventDefault();
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
    // alert(`Your were registered successfully`);
    navigate("/login");
  };

  return (
    <div id="signUpForm" onSubmit={handleSubmit(handleFormSubmit, errors)}>
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
            name="fname"
            {...register("fname", {
              required: "first name is required",
              minLength: {
                value: 6,
                message: "Your first name should have atleat 6 characters",
              },
              maxLength: {
                value: 20,
                message: "Your first name should have atleat 20 characters",
              },
            })}
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
          <small className="text-danger">
            {errors?.fname && errors.fname.message}
          </small>
          {console.log(errors)}
          <br />
          <label htmlFor="signUp" className="label">
            {" "}
            Last name
          </label>
          <input
            type="text"
            className="input"
            name="lname"
            value={lastName}
            {...register("lname", {
              required: "Lats name is required",
              minLength: {
                value: 6,
                message: "Your last name should have atleat 6 characters",
              },
              maxLength: {
                value: 20,
                message: "Your last name should have atleat 20 characters",
              },
            })}
            onChange={(e) => {
              setLname(e.target.value);
            }}
          />
          <br />
          <small className="text-danger">
            {errors?.lname && errors.lname.message}
          </small>
          <br />
          <label htmlFor="signUp" className="label">
            {" "}
            Email{" "}
          </label>
          <input
            type="text"
            className="input"
            name="email"
            {...register("email", {
              required: "Email is required",

              minLength: {
                value: 10,
                message: "Your email name should have atleat 10 characters",
              },
            })}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <small className="text-danger">
            {errors?.email && errors.email.message}
          </small>
          <br />
          <label htmlFor="signUp" className="label">
            {" "}
            Password{" "}
          </label>

          <input
            type="password"
            className="input"
            name="pswd"
            {...register("pswd", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Your password name should have atleat 8 characters",
              },
            })}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <small className="text-danger">
            {errors?.pswd && errors.pswd.message}
          </small>
          <br />
          <label htmlFor="signUp" className="label">
            Confirm password
          </label>
          <input
            type="password"
            className="input"
            name="confirm"
            value={confirmPassword}
            {...register("confirm", {
              required: "This field cannot be left empty",
            })}
            onChange={(e) => {
              setConfirm(e.target.value);
            }}
          />
          <br />
          <small className="text-danger">
            {errors?.confirm && errors.confirm.message}
          </small>
          <br />
          <button id="submitBtn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
