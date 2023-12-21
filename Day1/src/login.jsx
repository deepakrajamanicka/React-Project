import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./login.css"; // Import your external CSS file

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const user = 'Deepak@69';
  const pass = 'Deepak@69';

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

    if (username === user && password === pass) {
      navigate("/Newpage");
      return;
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div style={{
      margin: 0,
      overflow: 'hidden',
      backgroundColor: 'rgb(0, 255, 150)',  
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div style={{
        backgroundColor: 'rgb(11, 1, 13)',
        padding: '20px',
        borderRadius: '10px',
        maxWidth: '400px',
        width: '100%',
      }}>
        <h2 style={{ color: 'white' }}>LOGIN</h2>
        <form id="loginForm" onSubmit={(e) => validateForm(e)}>
          <label htmlFor="username" style={{ display: 'block', margin: '10px 0', color: 'white' }}><b>Username:</b></label>
          <input type="text" id="username" name="username" required aria-label="Username" placeholder="Enter your username" onChange={() => setErrorMessage('')} style={{ width: '100%', padding: '8px', margin: '8px 0' }} />

          <label htmlFor="password" style={{ display: 'block', margin: '10px 0', color: 'white' }}><b>Password:</b></label>
          <input type="password" id="password" name="password" required aria-label="Password" placeholder="Enter your password" onChange={() => setErrorMessage('')} style={{ width: '100%', padding: '8px', margin: '8px 0' }} />

          {errorMessage && <div style={{ textAlign: 'center', color: 'red' }}>{errorMessage}</div>}

          <div style={{ textAlign: 'center', margin: '10px 0' }}>
            <button type="submit" style={{ padding: '10px', backgroundColor: 'white', color: 'black', cursor: 'pointer' }}>Login</button>
          </div>

          <p style={{ textAlign: 'center', color: 'white' }}>Not an existing user? <Link to="/Sign" style={{ color: 'white' }}>Create an account</Link>.</p>
          <center><Link to="/Sign"><button style={{ padding: '30px', backgroundColor: 'white', color: 'black', cursor: 'pointer' }}>Sign Up</button></Link></center>
        </form>
      </div>
    </div>
  );
};

export default Login;
