import React, { useState } from "react";

export default function Signin() {
  const [formDetails, setFormDetails] = useState({ email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormDetails({ email: "", password: "" });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormDetails({ [name]: value });
  };

  const { email, password } = formDetails;

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={() => handleSubmit()}>
        <input
          name="email"
          value={email}
          type="email"
          required
          onChange={(e) => handleChange(e)}
        />
        <label> Email </label>
        <input
          name="password"
          value={password}
          type="password"
          required
          onChange={(e) => handleChange(e)}
        />
        <label> Password </label>

        <input type="submit" value="Sign in" />
      </form>
    </div>
  );
}
