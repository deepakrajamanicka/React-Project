import React from "react";
import { Link, useNavigate } from 'react-router-dom';

const SignUpComponent = () => {
  const navigate = useNavigate();

  const validateForm = (e) => {
    e.preventDefault();

    const username = e.target.elements.username.value.trim();
    const password = e.target.elements.password.value.trim();
    const confirmPassword = e.target.elements.confirmPassword.value.trim();
    const email = e.target.elements.email.value.trim();

    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';

    if (username === '' || password === '' || confirmPassword === '' || email === '') {
      errorMessage.textContent = 'All fields are required.';
      return;
    }

    if (username.length < 8) {
      errorMessage.textContent = 'Username must be at least 8 characters.';
      return;
    }

    if (username.charAt(0) !== username.charAt(0).toUpperCase()) {
      errorMessage.textContent = 'Username must start with a capital letter.';
      return;
    }

    if (password.length < 8) {
      errorMessage.textContent = 'Password must be at least 8 characters.';
      return;
    }

    if (password !== confirmPassword) {
      errorMessage.textContent = 'Passwords do not match.';
      return;
    } else {
      navigate("/Login");
      return;
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
        <div style={{ textAlign: 'center', color: 'white', marginBottom: '20px' }}>
          <h2>SIGN UP</h2>
        </div>
        <form id="loginForm" onSubmit={(e) => validateForm(e)}>
          <label htmlFor="username" style={{ display: 'block', margin: '10px 0', color: 'white' }}><b>Username:</b></label>
          <input type="text" id="username" name="username" required placeholder="Enter your username" onChange={() => document.getElementById('error-message').textContent = ''} style={{ width: '100%', padding: '8px', margin: '8px 0' }} />

          <label htmlFor="password" style={{ display: 'block', margin: '10px 0', color: 'white' }}><b>Password:</b></label>
          <input type="password" id="password" name="password" required placeholder="Enter your password" onChange={() => document.getElementById('error-message').textContent = ''} style={{ width: '100%', padding: '8px', margin: '8px 0' }} />

          <label htmlFor="confirmPassword" style={{ display: 'block', margin: '10px 0', color: 'white' }}><b>Re-enter Password:</b></label>
          <input type="password" id="confirmPassword" name="confirmPassword" required placeholder="Re-enter your password" onChange={() => document.getElementById('error-message').textContent = ''} style={{ width: '100%', padding: '8px', margin: '8px 0' }} />

          <label htmlFor="email" style={{ display: 'block', margin: '10px 0', color: 'white' }}><b>Email:</b></label>
          <input type="email" id="email" name="email" required placeholder="Enter your email" onChange={() => document.getElementById('error-message').textContent = ''} style={{ width: '100%', padding: '8px', margin: '8px 0' }} />

          <div id="error-message" style={{ textAlign: 'center', color: 'red', margin: '10px 0' }}></div>

          <center>
            <button type="submit" style={{ padding: '10px', backgroundColor: 'white', color: 'black', cursor: 'pointer' }}>Signup</button>
          </center>
          <div className="sign" style={{ textAlign: 'center', color: 'white', marginTop: '20px' }}>
            Already a member? <Link to="/Login" style={{ color: 'white' }}><button style={{ padding: '10px', backgroundColor: 'white', color: 'black', cursor: 'pointer' }}>Login</button></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpComponent;
