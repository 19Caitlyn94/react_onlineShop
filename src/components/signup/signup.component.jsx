import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './signup.styles.scss';

export default function Signup() {
  const initialFormData = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      setFormData(initialFormData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const { displayName, email, password, confirmPassword } = formData;
  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a password</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          label='Display Name'
          value={displayName}
          onChange={handleChange}
          required
        ></FormInput>
        <FormInput
          type='email'
          name='email'
          label='Email'
          value={email}
          onChange={handleChange}
          required
        ></FormInput>
        <FormInput
          type='password'
          name='password'
          label='Password'
          value={password}
          onChange={handleChange}
          required
        ></FormInput>
        <FormInput
          type='password'
          name='confirmPassword'
          label='Confirm Password'
          value={confirmPassword}
          onChange={handleChange}
          required
        ></FormInput>
        <Button type='submit'>SIGN UP</Button>
      </form>
    </div>
  );
}
