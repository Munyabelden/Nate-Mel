import React, { useState, useEffect } from 'react';
import Bg1 from '../assets/pexels-christina-morillo-1181244.jpg';
import Bg2 from '../assets/pexels-cottonbro-studio-5473302.jpg';
import Bg3 from '../assets/pexels-djordje-petrovic-2102416 (1).jpg';
import Bg4 from '../assets/pexels-sora-shimazaki-5926387 (1).jpg';
import Bg5 from '../assets/pexels-sora-shimazaki-5926387.jpg'
import '../styles/Header.css';

const backgrounds = [Bg1, Bg2, Bg3, Bg4, Bg5];

function Header() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    let index = 0;
  
    const intervalId = setInterval(() => {
      setBackgroundIndex(index);
      index = (index + 1) % backgrounds.length;
    }, 5000);
  
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="header" 
      style={{
        backgroundImage: `url(${backgrounds[backgroundIndex]})`,
      }}
    >
      <div className="header-text-container">
        <h1 className="header-1">Innovate Tomorrow, Today</h1>
      </div>
      <p>
         {/* We are a team of skilled professionals specializing in Front-end and Back-end software development, Graphic design, Accounting services, and Virtual assistance. With expertise in React, JavaScript, CSS, SASS, HTML, and Jest, we deliver websites and web apps that are tailored to your specific needs. Our graphic designer provides stunning logos and designs to make your brand stand out. Additionally, our accounting services and virtual assistance ensure that your business runs smoothly behind the scenes. Let us help you take your business to the next level. */}
         We are a versatile team with expertise in web development, graphic design, accounting, and virtual assistance. Our services include custom web solutions, captivating designs, and streamlined backend support. Let us enhance your business.
      </p>
      <button className="projects">See our previous projects</button>
    </div>
  );
}

export default Header;
