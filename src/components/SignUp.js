// SignUp.js
import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const isEmailValid = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    // Password validation regex, e.g., at least 8 characters
    return password.length >= 8;
  };

  const isPasswordConfirmationValid = (password, confirmation) => {
    return password === confirmation;
  };

  const handleSignUp = () => {
    if (!isEmailValid(email)) {
      alert('Invalid email address');
    } else if (!isPasswordValid(password)) {
      alert('Invalid password');
    } else if (!isPasswordConfirmationValid(password, passwordConfirmation)) {
      alert('Password confirmation does not match');
    } else {
      // Perform the sign-up logic
      // This is where you can send the data to your authentication server
      // and handle the sign-up process
    }
  };

  return (
    <div className="form-container">
      <h1>Welcome!</h1>
      <h3>Please, enter your details</h3>
      <div className="form-group">
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Full Name:</label>
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Confirm Password:</label>
        <input
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
      </div>
      <div className="button-container">
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
      Already have an account?<Link to="/signin">SignIn</Link>
    </div>
  );
};

export default SignUp;



