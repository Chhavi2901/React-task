// SignUp.js
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

        
  const handleSignUp = () => {
    setEmailError('');
    setFullNameError('');
    setPasswordError('');
    setPasswordConfirmationError('');
  
    if (!isEmailValid(email)) {
      setEmailError('Invalid email address');
    }
  
    if (!isPasswordValid(password)) {
      setPasswordError('Password must be at least 8 characters long');
    }
  
    if (!isPasswordConfirmationValid(password, passwordConfirmation)) {
      setPasswordConfirmationError('Password confirmation does not match');
    }
  
    // Check for other validations as needed
  
    // If there are no errors, you can proceed with sign-up
  }
  
  };

  return (
    <div className="form-container">
      <h1>Welcome!</h1>
      <h3>Please, enter your details</h3>
    <div className="form-group">
  <input
    type="text"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Enter your email here">/</input>
  {emailError && <div className="error-message">{emailError}</div>}
</div>

<div className="form-group">
  <input
    type="text"
    value={fullName}
    onChange={(e) => setFullName(e.target.value)}
    placeholder="Enter your Full Name"
  />
  {fullNameError && <div className="error-message">{fullNameError}</div>}
</div>

<div className="form-group">
  <input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Enter your password"
  />
  {passwordError && <div className="error-message">{passwordError}</div>}
</div>

<div className="form-group">
  <input
    type="password"
    value={passwordConfirmation}
    onChange={(e) => setPasswordConfirmation(e.target.value)}
    placeholder="Enter your confirmed password here"
  />
  {passwordConfirmationError && <div className="error-message">{passwordConfirmationError}</div>}
</div>
<div className="button-container">
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
      <br></br>
      <br></br>
      Already have an account?<Link to="/signin">SignIn</Link>
    </div>
  );
};

export default SignUp;



