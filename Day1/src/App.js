import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login.jsx';
import SignUpComponent from './components/Sign.jsx';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Sign" element={<SignUpComponent />} />
            </Routes>
        </Router>
    );
}

export default App;
