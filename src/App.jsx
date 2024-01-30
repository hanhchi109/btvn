import React, { useState } from 'react';
import '.App.css'


const App = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');


  const handleSignUp = (e) => {
    e.preventDefault();


    if (!fullName || !email || !password || !confirmPassword) {
      setMessage('Cannot leave any field blank!');
      return;
    }


    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage('Invalid email address');
      return;
    }


    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }


    setMessage('Sign up successfully!');
  };


  return (
    <div className="container">
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>


        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>


        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>


        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>


        <button type="submit" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>


      {message && <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>{message}</div>}
    </div>
  );
};


export default App;
