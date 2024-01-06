import React from "react";
import "./SignIn.css";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";

const SignIn = () => {
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
                errorMessage={""}
              />
              <TextInput
                type={"password"}
                icon={"lock"}
                inputName={"Password"}
                placeholder={"Enter Password"}
              />

              <div className="buttonsContainer">
                <Button type={"1"} text="Sign In" />
              </div>
              <div className="newHereContainer">
                <div>
                  <h2>New Here?</h2>
                  <div className="newHereButton">
                    <Button type={"2"} text="Sign Up" />
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
