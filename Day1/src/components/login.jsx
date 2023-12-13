import React, { useState } from "react";
import { Link } from 'react-router-dom'
import './login.css';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = (e) => {
    e.preventDefault();

    const username = e.target.elements.username.value.trim();
    const password = e.target.elements.password.value.trim();

    setErrorMessage('');

    if (username === '' || password === '') {
      setErrorMessage('Username and password are required.');
      return;
    }

    if (username.length < 8) {
      setErrorMessage('Username must be at least 8 characters.');
      return;
    }

    if (username.charAt(0) !== username.charAt(0).toUpperCase()) {
      setErrorMessage('Username must start with a capital letter.');
      return;
    }

    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters.');
      return;
    }

    setErrorMessage('Login successful!');
  };

  return (
    <div className="box">
      <div className="right">
        <h2>LOGIN</h2>
        <form id="loginForm" onSubmit={(e) => validateForm(e)}>
          <label htmlFor="username"><b>Username:</b></label>
          <input type="text" id="username" name="username" required aria-label="Username" placeholder="Enter your username" />

          <label htmlFor="password"><b>Password:</b></label>
          <input type="password" id="password" name="password" required aria-label="Password" placeholder="Enter your password" />

          {errorMessage && <div className="error">{errorMessage}</div>}

          <div style={{ textAlign: 'center' }}>
            <button type="submit">Login</button>
          </div>

          <p>Not an existing user? <Link to="/Sign">Create an account</Link>.</p>
          <Link to="/Sign"><button>Sign Up</button></Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
