import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#ffffff', padding: '20px 0', width: '100%' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <p style={{ margin: 0, fontSize: '14px', color: '#333' }}>
              &copy; {new Date().getFullYear()} BOOKS 69. All rights reserved.
            </p>
          </div>
          <div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex' }}>
              <li style={{ marginRight: '15px' }}><a href="/" style={{ textDecoration: 'none', color: '#333' }}>Home</a></li>
              <li style={{ marginRight: '15px' }}><a href="./come.html" style={{ textDecoration: 'none', color: '#333' }}>About Us</a></li>
              <li style={{ marginRight: '15px' }}><a href="./come.html" style={{ textDecoration: 'none', color: '#333' }}>Contact</a></li>
              <li><a href="./come.html" style={{ textDecoration: 'none', color: '#333' }}>Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '15px' }}>
          <p style={{ margin: 0, fontSize: '14px', color: '#333' }}>
            Contact: <a href="mailto:info@yourcompany.com" style={{ color: '#333' }}>BOOKS69@gmail.com</a> | Phone: 1234567890
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
