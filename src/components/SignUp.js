import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [emailError, setEmailError] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirmationError, setPasswordConfirmationError] = useState('');

  const isEmailValid = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    return password.length >= 8;
  };

  const isPasswordConfirmationValid = (password, confirmation) => {
    return password === confirmation;
  };

  const isNameValid = (name) => {
    const nameRegex = /^[A-Za-z ]+/; // Require at least one character
    return nameRegex.test(name);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setEmailError(!isEmailValid(emailValue) ? '*Invalid email address' : '');
  };

  const handleNameChange = (e) => {
    const nameValue = e.target.value;
    setFullName(nameValue);
    setFullNameError(!isNameValid(nameValue) ? '*Invalid name' : '');
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    setPasswordError(!isPasswordValid(passwordValue) ? '*Password must be at least 8 characters long' : '');
  };

  const handlePasswordConfirmationChange = (e) => {
    const passwordConfirmationValue = e.target.value;
    setPasswordConfirmation(passwordConfirmationValue);
    setPasswordConfirmationError(
      !isPasswordConfirmationValid(password, passwordConfirmationValue)
        ? '*Password confirmation does not match'
        : ''
    );
  };

  return (
    <div className="form-container">
      <h1>Welcome!</h1>
      <h3>Please, enter your details</h3>
      <div className="form-group">
        <input
          type="text"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email here"
        />
        {emailError && <div className="error-message">{emailError}</div>}
      </div>

      <div className="form-group">
        <input
          type="text"
          value={fullName}
          onChange={handleNameChange}
          placeholder="Enter your Full Name"
        />
        {fullNameError && <div className="error-message">{fullNameError}</div>}
      </div>

      <div className="form-group">
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
        />
        {passwordError && <div className="error-message">{passwordError}</div>}
      </div>

      <div className="form-group">
        <input
          type="password"
          value={passwordConfirmation}
          onChange={handlePasswordConfirmationChange}
          placeholder="Enter your confirmed password here"
        />
        {passwordConfirmationError && (
          <div className="error-message">{passwordConfirmationError}</div>
        )}
      </div>
      <div className="button-container">
        <button type="button">Sign Up</button>
      </div>
      <br />
      
      Already have an account? <Link to="/signin">SignIn</Link>
    </div>
  );
};

export default SignUp;
