import React, { useState, useEffect } from 'react';
import Bg1 from '../assets/pexels-christina-morillo-1181244.jpg';
import Bg2 from '../assets/pexels-cottonbro-studio-5473302.jpg';
import Bg3 from '../assets/pexels-djordje-petrovic-2102416 (1).jpg';
import Bg4 from '../assets/pexels-sora-shimazaki-5926387 (1).jpg';
import Bg5 from '../assets/pexels-sora-shimazaki-5926387.jpg'
import '../styles/Header.css';

const backgrounds = [Bg1, Bg2, Bg3, Bg4, Bg5];

function Header() {
  const [headerText, setHeaderText] = useState('Hi there!');
  const [next, setNextIndex] = useState(1);
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    let index = 0;
  
    const intervalId = setInterval(() => {
      setBackgroundIndex(index);
      index = (index + 1) % backgrounds.length;
    }, 5000);
  
    return () => clearInterval(intervalId);
  }, []);  

  useEffect(() => {
    const texts = ['Welcome to Nate~Mel', 'Where creativity meets functionality.', 'Get in touch'];
    let count = 0;
    let index = 0;
  
    const intervalId = setInterval(() => {
      if (count >= texts[index].length) {
        count = 0;
        index = (index + 1) % texts.length;
        setNextIndex((n) => (n + 1) % texts.length);
      } else {
        setHeaderText(texts[index].slice(0, count + 1));
        count++;
      }
    }, 250);
  
    return () => clearInterval(intervalId);
  }, []);  

  return (
    <div className="header" style={{
      backgroundImage: `url(${backgrounds[backgroundIndex]})`,
    }}>
      <div className="header-text-container">
        <h2 className="header-text">{headerText}<span className="header-text-cursor">{next === 0 ? '|' : '|'}</span></h2>
      </div>
      <p>
         We are a team of skilled professionals specializing in Front-end and Back-end software development, Graphic design, Accounting services, and Virtual assistance. With expertise in React, JavaScript, CSS, SASS, HTML, and Jest, we deliver websites and web apps that are tailored to your specific needs. Our graphic designer provides stunning logos and designs to make your brand stand out. Additionally, our accounting services and virtual assistance ensure that your business runs smoothly behind the scenes. Let us help you take your business to the next level.
      </p>
      <button className="projects">See our previous projects</button>
      <div className="social-links"> 
        <h3>Let's connect</h3>
        <ul>
          <li><a href="https://github.com/Munyabelden/" rel="noreferrer" target="_blank"><i className="fa-brands fa-square-github" /></a></li>
          <li><a href="https://www.linkedin.com/in/munyaradzi-mugauri-828a7b24a/" rel="noreferrer" target="_blank"><i className="fa-brands fa-linkedin" /></a></li>
          <li><a href="https://twitter.com/munyaradzi045" rel="noreferrer" target="_blank"><i className="fa-brands fa-square-twitter" /></a></li>
          <li><a href="https://github.com/Munyabelden/" rel="noreferrer" target="_blank"><i className="fa-brands fa-facebook" /></a></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
