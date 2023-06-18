import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <h2>Elevating your digital strategy with full-stack development</h2>
      <div className="social-links"> 
        <button>see our previous projects</button>
        <ul>
          <li><a href="https://github.com/Munyabelden/" rel="noreferrer" target="_blank"><i className="fa-brands fa-square-github" /></a></li>
          <li><a href="https://www.linkedin.com/in/munyaradzi-mugauri-828a7b24a/" rel="noreferrer" target="_blank"><i className="fa-brands fa-linkedin" /></a></li>
          <li><a href="https://twitter.com/munyaradzi045" rel="noreferrer" target="_blank"><i className="fa-brands fa-square-twitter" /></a></li>
          <li><a href="https://github.com/Munyabelden/" rel="noreferrer" target="_blank"><i className="fa-brands fa-facebook" /></a></li>
        </ul>
      </div>
      <p>
        Partner with NateMel today for expert full-stack development services and take your digital strategy to the next level.
      </p>
      <span className="copyright">Copyright © 2023 Nate~Mel</span> 
    </div>
  )
}

export default Footer;