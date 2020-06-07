import React from 'react';
import './signin-and-signup.styles.scss';
import Signin from '../../components/signin/signin.component';
import Signup from '../../components/signup/signup.component';

export default function SigninAndSignupPage() {
  return (
    <div className='signin-and-signup'>
      <div>
        <h1>Sign in</h1>
        <Signin />
      </div>

      <div>
        <h1>Sign up</h1>
        <Signup />
      </div>
    </div>
  );
}
