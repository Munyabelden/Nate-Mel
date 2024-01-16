import { useEffect, useState } from 'react';
import Footer from './subComponents/Footer';
import './styles/About.css';
import image6 from './assets/medium.jpg';
import image5 from './assets/inspiration-development-modern-creative.jpg'
import image4 from './assets/812.jpg';
import image3 from './assets/flat-lay-business-concept.jpg';
import image2 from './assets/html.jpg';
import Image1 from './assets/programming.jpg';

function About() {
  const [headerText, setHeaderText] = useState('Hi there!');
  const [next, setNextIndex] = useState(1);

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
    }, 350);
  
    return () => clearInterval(intervalId);
  }, []);  
  return (
    <div className="about">
      <div className="about-header">
        <div className="header-text-container">
          <h1 className="header-text">{headerText}<span className="header-text-cursor">{next === 0 ? '|' : '|'}</span></h1>
        </div>
        <p>
          Our commitment extends beyond code, as we empower businesses not only to thrive in the digital realm but also to navigate the complexities of financial management with confidence. Explore the intersection of cutting-edge technology and financial proficiency with our holistic suite of services tailored to elevate your business to new heights.
        </p>
      </div>
      <div className="columns">
        <div className="column">
          <img src={Image1} alt=""/>
          <h3>Full Stack Web Development</h3>
          <p>
            Our Full-Stack Development service provides end-to-end solutions, covering both the frontend and backend aspects of web development. On the frontend, we specialize in crafting engaging and responsive user interfaces using HTML, CSS, and JavaScript (JS). Our backend expertise encompasses a variety of languages, including Ruby, Python, PHP, and the utilization of frameworks such as Ruby on Rails and Django. With proficiency in database management systems like PostgreSQL and SQL, we ensure seamless integration and optimal performance throughout the entire stack, delivering comprehensive and dynamic web applications.
          </p>
        </div>
        <div className="column">
          <img src={image2} alt=""/>
          <h3>Frontend Development</h3>
          <p>
            Elevate your online presence with our specialized Frontend Development service. We create visually appealing and user-friendly interfaces using HTML for structure, CSS for styling, and JavaScript for dynamic functionality. Our frontend expertise extends to modern frameworks such as React, ensuring a cutting-edge and responsive user experience. Whether you're looking to revamp your website or build a new, engaging interface, our frontend development team is dedicated to bringing your vision to life.
          </p>
        </div>
        <div className="column">
          <img src={image4} alt=""/>
          <h3>Backend Development</h3>
          <p>
            Powering the engine behind your web applications, our Backend Development service is tailored to handle the server-side logic and database management. We leverage robust languages like Ruby, Python, and PHP to create scalable and efficient backend systems. Our proficiency in frameworks like Ruby on Rails and Django ensures rapid development without compromising on code quality. With expertise in SQL and PostgreSQL, we design and implement databases that seamlessly integrate with your application, providing a robust foundation for your digital solutions.
          </p>
        </div>
        <div className="column">
          <img src={image5} alt=""/>
          <h3>Graphic Designing</h3>
          <p>
            Immerse your brand in a world of visual excellence with our Graphic Design service. Our creative team harnesses the power of industry-leading tools such as Adobe Photoshop and Adobe Illustrator to meticulously craft compelling visual elements. From stunning logos to captivating marketing materials, we blend creativity with technical precision to ensure your brand stands out. Our graphic designers are adept at translating concepts into visually striking designs, ensuring that every pixel tells a story. Elevate your brand aesthetic and make a lasting impression with our expertise in graphic design, where we leverage the latest design software to bring your vision to life.
          </p>
        </div>
        <div className="column">
          <img src={image3} alt=""/>
          <h3>Accounting Services</h3>
          <p>
            Navigate the financial landscape with confidence through our comprehensive Accounting Services. Our team of seasoned professionals is dedicated to providing meticulous financial management solutions tailored to your business needs. From bookkeeping and payroll to tax planning and business registration, we offer a full suite of services to ensure the fiscal health of your enterprise. With expertise in accounting software, adherence to regulatory standards, and a commitment to transparency, our Accounting Services empower you to focus on your core business, knowing that your financial affairs are in capable hands.
          </p>
        </div>
        <div className="column">
          <img src={image6} alt=""/>
          <h3>Virtual Assistance</h3>
          <p>
            Streamline your operations and boost productivity with our Virtual Assistance service. Our virtual assistants are equipped to handle a range of tasks, from administrative support to customer engagement. Whether it's managing emails, scheduling appointments, or providing customer service, our virtual assistants leverage technology to efficiently support your business needs. With a commitment to confidentiality and a proactive approach to tasks, our Virtual Assistance service is designed to be a seamless extension of your team, allowing you to concentrate on strategic initiatives while we handle the day-to-day operations. Experience the flexibility and efficiency of virtual support with our dedicated team at your service.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
