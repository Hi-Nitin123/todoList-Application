import React, { useState } from "react";
import "../../css/SignUp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import validator from "validator";

function SignUp() {
  const navigate = useNavigate();
  // const firstNameRef = useRef(null);
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");
  const [checked, setChecked] = useState({
    firstNameChecked: false,
    lastNameChecked: false,
    emailChecked: false,
    passwordChecked: false,
    confirmPasswordChecked: false,
  });
  // const [counter, setCounter] = useState(0);
  const [errors, setErrors] = useState({
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log("inside");
    axios
      .post("http://localhost:8000/signUp", {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      })
      .then((res) => alert(`${res.data}`))
      .catch((err) => console.log(err));
    // alert(`Your were registered successfully`);
    navigate("/login");
  };

  const firstNameHandler = () => {
    if (validator.isEmpty(firstName)) {
      setErrors((prev) => {
        return { ...prev, firstNameError: "This is a required field" };
      });
      setChecked((pre) => {
        return { ...pre, firstNameChecked: false };
      });
      // setErrors((err) => err);
    } else {
      setErrors((prev) => {
        return { ...prev, firstNameError: "" };
      });

      setChecked((pre) => {
        return { ...pre, firstNameChecked: true };
      });
    }
  };

  const lastNameHandler = () => {
    if (validator.isEmpty(lastName)) {
      setErrors((pre) => {
        return { ...pre, lastNameError: "This is a required field" };
      });
      setChecked((pre) => {
        return { ...pre, lastNameChecked: false };
      });
    } else {
      // setErrorState(false);

      setErrors((pre) => {
        return { ...pre, lastNameError: "" };
      });
      setChecked((pre) => {
        return { ...pre, lastNameChecked: true };
      });
    }
  };

  const handleEmailError = () => {
    if (validator.isEmpty(email)) {
      setErrors((err) => {
        return { ...err, emailError: "This is a required field" };
      });
      setChecked((pre) => {
        return { ...pre, emailNameChecked: false };
      });
    } else {
      // setErrorState(false);
      if (!validator.isEmail(email)) {
        setErrors((err) => {
          return { ...err, emailError: "This is an invalid email" };
        });
        setChecked((pre) => {
          return { ...pre, emailChecked: false };
        });
      } else {
        setErrors((err) => {
          return { ...err, emailError: "" };
        });
        console.log(checked.emailChecked);
        setChecked((pre) => {
          return { ...pre, emailChecked: true };
        });
      }
    }
  };

  const handlePasswordError = () => {
    if (validator.isEmpty(password)) {
      setErrors((err) => {
        return { ...err, passwordError: "This is a required field" };
      });
      setChecked((pre) => {
        return { ...pre, passwordChecked: false };
      });
    } else {
      // setErrorState(false);

      setErrors((err) => {
        return { ...err, passwordError: "" };
      });
      setChecked((pre) => {
        return { ...pre, passwordChecked: true };
      });
    }
  };

  const handleConfirmPasswordError = () => {
    if (validator.isEmpty(confirmPassword)) {
      setErrors((err) => {
        return { ...err, confirmPasswordError: "This is a required field" };
      });
      setChecked((pre) => {
        return { ...pre, confirmPasswordChecked: false };
      });
    } else {
      if (validator.equals(password, confirmPassword)) {
        setErrors((err) => {
          return { ...err, confirmPasswordError: "" };
        });

        setChecked((pre) => {
          return { ...pre, confirmPasswordChecked: true };
        });
      } else {
        setErrors((err) => {
          return { ...err, confirmPasswordError: "Password do not match" };
        });
      }
    }
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
            First name
          </label>
          <input
            type="text"
            className="input"
            name="fname"
            value={firstName}
            onBlur={() => {
              console.log("fname blur");
              firstNameHandler();
            }}
            // onChange={(e) => {
            //   setFname(e.target.value);
            // }}
            onChange={(e) => {
              setFname(e.target.value);
            }}
          />
          <br />
          <small className="text-danger">{errors.firstNameError}</small>

          <br />
          <label htmlFor="signUp" className="label">
            Last name
          </label>
          <input
            type="text"
            className="input"
            name="lname"
            value={lastName}
            onBlur={() => {
              lastNameHandler();
            }}
            onChange={(e) => {
              setLname(e.target.value);
            }}
          />
          <br />
          <small className="text-danger">{errors.lastNameError}</small>

          <br />
          <label htmlFor="signUp" className="label">
            Email
          </label>
          <input // alert(`Your were registered successfully`);
            className="input"
            name="email"
            value={email}
            autoComplete="off"
            onBlur={() => {
              handleEmailError();
            }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <small className="text-danger">{errors.emailError}</small>

          <br />
          <label htmlFor="signUp" className="label">
            Password
          </label>
          <input
            type="password"
            className="input"
            name="pswd"
            autoComplete="off"
            autoSave="false"
            value={password}
            onBlur={() => {
              handlePasswordError();
            }}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <small className="text-danger">{errors.passwordError}</small>
          <br />
          <label htmlFor="signUp" className="label">
            Confirm password
          </label>
          <input
            type="password"
            className="input"
            name="confirm"
            autoSave="false"
            value={confirmPassword}
            onBlur={() => {
              handleConfirmPasswordError();
            }}
            onChange={(e) => {
              setConfirm(e.target.value);
            }}
          />
          <br />
          <small className="text-danger">{errors.confirmPasswordError}</small>

          <br />

          <br />
          {console.log("showStatus", checked)}
          {console.log(email)}

          <button
            id="submitBtn"
            onClick={(e) => {
              checked.firstNameChecked &&
              checked.lastNameChecked &&
              checked.emailChecked &&
              checked.passwordChecked &&
              checked.confirmPasswordChecked
                ? handleFormSubmit(e)
                : alert(`Please fill all the details properly before proceed`);
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
