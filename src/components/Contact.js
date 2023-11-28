import React, { useState } from 'react';
import './styles/Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [numberError, setNumberError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') {
      setNameError('Please enter your full name');
    } else {
      setNameError('');
    }
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
    if (number.trim() === '') {
      setNumberError('Please enter a valid phone number address');
    } else {
      setNumberError('');
    }
    if (name.trim() !== '' && validateEmail(email) && number.trim()) {
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
    }
  }

  return (
    <div className="container">
      <h2>Get in touch</h2>
      <div className="contacts">
        <form onSubmit={handleSubmit} className="form">
          <div>
            <label htmlFor="name">Full Name:</label>
            <input type="text" name="name" placeholder="Enter your full name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            {nameError && <div className="error">{nameError}</div>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" placeholder="Enter your email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            {emailError && <div className="error">{emailError}</div>}
          </div>
          <div>
            <label htmlFor="number">Phone Number:</label>
            <input type="text" name="number" placeholder="Enter your phone number" id="number" value={number} onChange={(e) => setNumber(e.target.value)} required />
            {emailError && <div className="error">{numberError}</div>}
          </div>
          <div>
            <label htmlFor="message">How an we help:</label>
            <textarea name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
        <div className="extras">
          <span>Call Tatenda Zhou @ 07</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
