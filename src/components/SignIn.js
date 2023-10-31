import React, { useState } from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const isEmailValid = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    return password.length >= 8;
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setEmailError(!isEmailValid(emailValue) ? '*Invalid email address' : '');
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    setPasswordError(!isPasswordValid(passwordValue) ? '*Invalid password' : '');
  };

  const handleSignIn = () => {
    setEmailError('');
    setPasswordError('');

    if (!isEmailValid(email)) {
      setEmailError('*Invalid email address');
    }
    if (!isPasswordValid(password)) {
      setPasswordError('*Invalid password');
    }
  };

  return (
    <div className="form-container">
      <h1>Welcome!</h1>
      <h3>Please enter your details</h3>
      <div className="form-group">
        <input
          type="text"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email address"
        />
        {emailError && <div className="error-message">{emailError}</div>}
      </div>
      <div className="form-group">
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password here"
        />
        {passwordError && <div className="error-message">{passwordError}</div>}
      </div>
      <div className="button-container">
        <button onClick={handleSignIn}>Sign In</button>
      </div>
      <br></br>
      Don't have an account? <Link to="/signup">SignUp</Link>
    </div>
  );
};

export default SignIn;
