import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './styles/Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 250) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = ['navbar'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }

  return (
    <nav className={navbarClasses.join(' ')}>
      <h1><NavLink to="/">Nate~Mel</NavLink></h1>
      <ul>
        <li><NavLink to="/" isActive={ () => location.pathname === "/"} className="underline">Home</NavLink></li>
        <li><NavLink to="/about" isActive={ () => location.pathname === "/about"} className="underline">About Us</NavLink></li>
        <li><NavLink to="/contact" isActive={ () => location.pathname === "/contact"} className="underline">Contact Us</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
