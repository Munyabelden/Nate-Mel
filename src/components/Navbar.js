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
      <ul>
        <li><a href="https://github.com/Munyabelden/" rel="noreferrer" target="_blank"><i className="fa-brands fa-square-github" /></a></li>
          <li><a href="https://www.linkedin.com/in/munyaradzi-mugauri-828a7b24a/" rel="noreferrer" target="_blank"><i className="fa-brands fa-linkedin" /></a></li>
          <li><a href="https://twitter.com/munyaradzi045" rel="noreferrer" target="_blank"><i className="fa-brands fa-square-twitter" /></a></li>
          <li><a href="https://github.com/Munyabelden/" rel="noreferrer" target="_blank"><i className="fa-brands fa-facebook" /></a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
