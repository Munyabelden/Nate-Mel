import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './styles/Navbar.css';

function Navbar() {
  const [isToggled, setToggle] = useState(false);
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

  const handleMenu = () => {
    if(!isToggled){
      setToggle(true);
    }else {
      setToggle(false);
    }
  }

  return (
    <nav className={navbarClasses.join(' ')}>
      <h1><NavLink to="/">Nate~Mel</NavLink></h1>
      <button type="button" className="menu-icon" onClick={handleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <div className={`primary-navigation ${isToggled ? 'render-nav' : ''}`}>
        <ul>
          <li><NavLink to="/" isActive={ () => location.pathname === "/"} className="underline" onClick={handleMenu}>Home</NavLink></li>
          <li><NavLink to="/about" isActive={ () => location.pathname === "/about"} className="underline" onClick={handleMenu}>Services</NavLink></li>
          <li><NavLink to="/contact" isActive={ () => location.pathname === "/contact"} className="underline" onClick={handleMenu}>Contact Us</NavLink></li>
        </ul>
        <ul>
          <li><a href="https://github.com/Munyabelden/" rel="noreferrer" target="_blank"><i className="fa-brands fa-square-github" /></a></li>
            <li><a href="https://www.linkedin.com/in/munyaradzi-mugauri-828a7b24a/" rel="noreferrer" target="_blank"><i className="fa-brands fa-linkedin" /></a></li>
            <li><a href="https://twitter.com/munyaradzi045" rel="noreferrer" target="_blank"><i className="fa-brands fa-square-twitter" /></a></li>
            <li><a href="https://github.com/Munyabelden/" rel="noreferrer" target="_blank"><i className="fa-brands fa-facebook" /></a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
