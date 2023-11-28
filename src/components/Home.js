import React, { useRef, useEffect } from 'react';
import Header from './subComponents/Header';
import MultiCarouselSlider from './subComponents/Carousel';
import Image from './assets/aerial-view-business-team.jpg';
import Image2 from './assets/business-people-meeting.jpg';
// import Services from './Services';
import './styles/Home.css'
import Footer from './subComponents/Footer';

function Home() {

  const spanRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1, // Change this value based on when you want the animation to trigger
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const span = entry.target;
          span.style.animationDelay = `${span.dataset.index * 1}s`;
          span.classList.add('fadeInLeft');
          observer.unobserve(span);
        }
      });
    }, options);

    const spans = spanRefs.current;
    spans.forEach((span, index) => {
      span.dataset.index = index; // Store index as data attribute
      observer.observe(span);
    });

    return () => {
      observer.disconnect(); // Clean up observer on unmount
    };
  }, []);

  return (
    <div >
      <Header />
      <h2 className="home-services-title"> What we do</h2>
      <MultiCarouselSlider />
      <div className="values">
        <h2>Our Values</h2>
        <section className="value-columns">
          <div class="value-column">
            <span ref={(el) => (spanRefs.current[0] = el)}>01</span>
            <h3>Dignity</h3>
            <p>We honor the dignity of individuals and acknowledge the inherent creative abilities within each person. Our investment atmosphere thrives on diversity and inclusivity.</p>
          </div>
          <div class="value-column">
            <span ref={(el) => (spanRefs.current[1] = el)}>02</span>
            <h3>Integrity</h3>
            <p>We are dedicated to upholding what is ethical as it forms the foundation of our reputation. Essential to us are transparency, truthfulness, and responsibility.</p>
          </div>
          <div class="value-column">
            <span ref={(el) => (spanRefs.current[2] = el)}>03</span>
            <h3>Innovation</h3>
            <p>
              We embrace the transformative potential of innovation in shaping lives. Adapting swiftly to the pace of technological advancements, we foster progressive breakthroughs by swiftly investing in promising developments.
            </p>
          </div>
        </section>
      </div>
      <div className="details">
        <div className='infor'>
          <h2>Our Expertise</h2>
          <p>
            Our expertise in Full Stack development, offers end-to-end solutions for businesses looking to optimize their digital presence. Our team of experienced developers, designers, and project managers work together to deliver custom software solutions tailored to meet the unique needs of each client. Whether you're a startup or an established enterprise, we can help you build and launch software that scales with your business. Contact us today to learn more about how we can help you achieve your digital goals.
          </p>
        </div>
        <div className="image">
          <img src={Image} alt="company"/>
        </div>
      </div>
      <div className="strategy">
        <div className="infor">
          <h2>Why us?</h2>
          <p>
            Finding the right developer for your project is crucial to its success. You need someone with the right skills and experience to bring your vision to life. At Nate~Mel, we understand how overwhelming it can be to find the perfect developer for your project. That's why we offer a team of experienced developers who specialize in a wide range of technologies and programming languages. Whether you need a developer for web development, mobile app development, or custom software development, our team can help. We take the time to understand your project requirements and match you with the right developer for the job. Contact us today to discuss your project and learn more about how we an help you find the right developer for your needs.
          </p>
        </div>
        <div className="image">
          <img src={Image2} alt="company"/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
