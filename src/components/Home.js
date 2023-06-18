import React from 'react';
import Header from './subComponents/Header';

function Home() {
  return (
    <div>
      <Header />
      <div>
        <h2>Our Company</h2>
        <p>
          Our expertise in Full Stack development, offers end-to-end solutions for businesses looking to optimize their digital presence. Our team of experienced developers, designers, and project managers work together to deliver custom software solutions tailored to meet the unique needs of each client. Whether you're a startup or an established enterprise, we can help you build and launch software that scales with your business. Contact us today to learn more about how we can help you achieve your digital goals.
        </p>
        <p>
          Finding the right developer for your project is crucial to its success. You need someone with the right skills and experience to bring your vision to life. At Nate~Mel, we understand how overwhelming it can be to find the perfect developer for your project. That's why we offer a team of experienced developers who specialize in a wide range of technologies and programming languages. Whether you need a developer for web development, mobile app development, or custom software development, our team can help. We take the time to understand your project requirements and match you with the right developer for the job. Contact us today to discuss your project and learn more about how we can help you find the right developer for your needs.
        </p>
        <button>Get in touch</button>
      </div>
      <div>
        <ul>
          <li>
            <span><i className="fa-solid fa-clipboard-list-check" /></span>
          </li>
          <li>
            <span><i className="fa-solid fa-camera-security" /></span>
          </li>
          <li>
            <span><i className="fa-solid fa-repeat" /></span>
          </li>
          <li>
            <span><i className="fa-solid fa-thumbs-up" /></span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
