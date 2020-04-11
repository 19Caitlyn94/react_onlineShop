import React, { useState } from "react";
import "./signin.styles.scss";

import { signInWithGoogle } from "../../firebase/firebase.utils.js";

import FormInput from "../form-input/form-input.component";
import Button from "../custom-button/custom-button.component";

export default function Signin() {
  const [formDetails, setFormDetails] = useState({ email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormDetails({ email: "", password: "" });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const { email, password } = formDetails;

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          value={email}
          type="email"
          handleChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          name="password"
          value={password}
          type="password"
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <Button type="submit"> Sign in </Button>
          <Button onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
}
