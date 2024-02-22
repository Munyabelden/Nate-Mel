import { useForm, ValidationError } from '@formspree/react';
import Footer from './subComponents/Footer';
import './styles/Contact.css';

function Contact() {
  const [state, handleSubmit] = useForm("myyrjgkw");
    if (state.succeeded) {
      return (
        <div className="email-sent-message">
          <p>Thank you for expressing interest in our services. We appreciate your inquiry and will be in touch with you shortly. Your satisfaction is our priority, and we look forward to the opportunity to serve you.</p>
          <p>
          <a href="/">Go back to the home page</a>
          </p>
        </div>
      );
  }

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [number, setNumber] = useState('');
  // const [message, setMessage] = useState('');
  // const [nameError, setNameError] = useState('');
  // const [emailError, setEmailError] = useState('');
  // const [numberError, setNumberError] = useState('');

  // const validateEmail = (email) => {
  //   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return re.test(email);
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (name.trim() === '') {
  //     setNameError('Please enter your full name');
  //   } else {
  //     setNameError('');
  //   }
  //   if (!validateEmail(email)) {
  //     setEmailError('Please enter a valid email address');
  //   } else {
  //     setEmailError('');
  //   }
  //   if (number.trim() === '') {
  //     setNumberError('Please enter a valid phone number address');
  //   } else {
  //     setNumberError('');
  //   }
  //   if (name.trim() !== '' && validateEmail(email) && number.trim()) {
  //     console.log('Name:', name);
  //     console.log('Email:', email);
  //     console.log('Message:', message);
  //   }
  // }

  return (
    <div className="container">
      <div className="contact-header">
        <h2>Get in touch</h2>
        <div className="contact-extras">
          <div>
            <h3>Tatenda Zhou</h3>
            <span>+2772 066 3578</span>
            <span>tatendaz127@gmail.com</span>
          </div>
          <div>
            <h3>Grace Zhou</h3>
            <span>+2767 263 9770</span>
            <span>graceruvimbo681@gmail.com</span>
          </div>
          <div>
            <h3>Munyaradzi Mugauri</h3>
            <span>+2779 595 7913</span>
            <span>munyaradzi045@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="contacts" action="https://formspree.io/f/mzbqzlen" method="POST">
        <form onSubmit={handleSubmit} className="form">
          <div>
            <label htmlFor="name">Full Name:</label>
            <input type="text" name="name" placeholder="Enter your full name" id="name" required /> 
            <ValidationError 
              prefix="name" 
              field="name"
              errors={state.errors}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" placeholder="Enter your email" id="email"  required />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label htmlFor="number">Phone Number:</label>
            <input type="text" name="number" placeholder="Enter your phone number" id="number" required />
            <ValidationError 
              prefix="number" 
              field="number"
              errors={state.errors}
            />
          </div>
          <div>
            <label htmlFor="message">How can we help:</label>
            <textarea name="message" id="message" cols="40" rows="10" placeholder="Write your message here" required></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting} className="submit-button">Send</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
