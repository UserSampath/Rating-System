import React, { useState } from "react";
import "./SignIn.css";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import validator from "validator";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //errors
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

const signInButtonClicked = () => {
  if (!email) {
    setEmailError("Enter email");
  } else if (!validator.isEmail(email)) {
    setEmailError("Enter valid email");
  } else if (!password) {
    setPasswordError("Enter password");
  } else if (!validator.isLength(password, { min: 8 })) {
    setPasswordError("Password must be at least 8 characters long");
  } else {
      console.log("dve");
  }


};

  return (
    <div className="signUpPage">
      <div className="boxContainer">
        <div className="signInBox">
          <div className="centerSignIn">
            <div className="signInContainer">
              <h2>Sign In</h2>
              <TextInput
                type={"text"}
                icon={"mail"}
                inputName={"Email"}
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
                <Button
                  onClick={signInButtonClicked}
                  type={"1"}
                  text="Sign In"
                />
              </div>
              <div className="newHereContainer">
                <div>
                  <h2>New Here?</h2>
                  <div className="newHereButton">
                    <Button onClick={()=>navigate("/register")} type={"2"} text="Sign Up" />
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
                <p>Log in to access your account. </p>
              </div>
              <img className="signInImage" src="../../image/pic1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
