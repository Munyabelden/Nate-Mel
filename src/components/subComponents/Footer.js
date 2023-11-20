import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <h2>Elevating your digital strategy with full-stack development</h2>
      <div>
        <div className="social-links">
          <h4>Nate~Mel</h4>
          <ul>
            <li><a href="https://github.com/Munyabelden/" rel="noreferrer" target="_blank"><i className="fa-brands fa-square-github" /></a></li>
            <li><a href="https://www.linkedin.com/in/munyaradzi-mugauri/" rel="noreferrer" target="_blank"><i className="fa-brands fa-linkedin" /></a></li>
            <li><a href="https://twitter.com/munyaradzi045" rel="noreferrer" target="_blank"><i className="fa-brands fa-square-twitter" /></a></li>
            <li><a href="https://github.com/Munyabelden/" rel="noreferrer" target="_blank"><i className="fa-brands fa-facebook" /></a></li>
          </ul>
        </div>
        <div>
          <h4>Contact Us</h4>
          <span>munyaradzi045@gmail.com</span>
        </div>
      </div>
      <p>
        Partner with Nate~Mel today for expert full-stack development services and take your digital strategy to the next level.
      </p>
      <span className="copyright">Copyright © 2023 Nate~Mel</span> 
    </div>
  )
}

export default Footer;
