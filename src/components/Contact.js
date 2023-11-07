import React, { useState } from 'react';
import './styles/Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

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
    if (name.trim() !== '' && validateEmail(email)) {
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
    }
  }

  return (
    <div className="form-container">
      <h2>Get in touch</h2>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
