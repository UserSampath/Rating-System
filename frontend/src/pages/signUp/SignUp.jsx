import React, { useEffect, useState } from "react";
import "./SignUp.css";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import Swal from "sweetalert2";
import validator from "validator"
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const navigate = useNavigate();
  //  Swal.fire({
  //    title: "Login failed?",
  //    text: "That thing is still around?",
  //    icon: "question",
  //  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //errors
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");


  const signUpButtonClicked = () => {
   

    if (!firstName) {
      setFirstNameError("Enter first name");
    } else if (!lastName) {
      setLastNameError("Enter last name");
    } else if (!email) {
      setEmailError("Enter email");
    } else if (!validator.isEmail(email)) {
      setEmailError("Enter valid email");
    } else if (!password) {
      setPasswordError("Enter password");
    } else if (!validator.isLength(password, { min: 8 })) {
      setPasswordError("Password must be at least 8 characters long");
    }

     console.log("signUp");
      
  }

  return (
    <div className="signUpPage">
      <div className="boxContainer">
        <div className="signInBox">
          <div className="centerSignIn">
            <div className="signContainer2">
              <h2>Sign Up</h2>
              <TextInput
                type={"text"}
                icon={"profile"}
                inputName={"First Name"}
                placeholder={"Enter First Name"}
                value={firstName}
                onChange={(value) => setFirstName(value)}
                errorMessage={firstNameError}
                onFocus={() => setFirstNameError("")}
              />
              <TextInput
                type={"text"}
                icon={"profile"}
                inputName={"Last Name"}
                placeholder={"Enter Last Name"}
                value={lastName}
                onChange={(value) => setLastName(value)}
                errorMessage={lastNameError}
                onFocus={() => setLastNameError("")}
              />
              <TextInput
                type={"email"}
                icon={"mail"}
                inputName={"email"}
                placeholder={"Enter Email"}
                value={email}
                onChange={(value) => setEmail(value)}
                errorMessage={emailError}
                onFocus={() => setEmailError("")}
              />

              <TextInput
                type={"password"}
                icon={"lock"}
                inputName={"Password"}
                placeholder={"Enter Password"}
                value={password}
                onChange={(value) => setPassword(value)}
                errorMessage={passwordError}
                onFocus={() => setPasswordError("")}
              />

              <div className="buttonsContainer">
                <Button type={"1"} text="Sign Up" onClick={signUpButtonClicked}  />
              </div>
              <div className="newHereContainer">
                <div>
                  <h2>Already have an account?</h2>
                  <div className="newHereButton2">
                    <Button onClick={()=>navigate("/login")} type={"2"} text="Sign In" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="imageContainer">
          <div className="imageBox">
            <div>
              <div className="imgContainerText">
                <h2 className="whiteH2">Welcome to</h2>
                <h1>Lenzz Rating System</h1>
                <p>Register to create your account </p>
              </div>
              <img className="signInImage" src="../../image/pic1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
