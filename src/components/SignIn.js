// SignIn.js
import React, { useState } from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    // Password validation regex, e.g., at least 8 characters
    return password.length >= 8;
  };

  const handleSignIn = () => {
    if (!isEmailValid(email)) {
      alert('Invalid email address');
    } else if (!isPasswordValid(password)) {
      alert('Invalid password');
    } else {
      // Perform the sign-in logic
      // This is where you can send the data to your authentication server
      // and handle the sign-in process
    }
  };

  return (
    <div className="form-container">
      <h1>Welcome!</h1>
      <h3>Please ,enter your details</h3>
      <div className="form-group">
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="button-container">
        <button onClick={handleSignIn}>Sign In</button>
      </div>
      Don't have an account?<Link to="/signup">SignUp</Link>
    </div>
  );
};

export default SignIn;

