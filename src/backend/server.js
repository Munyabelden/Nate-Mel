const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// Middleware for parsing JSON data
app.use(bodyParser.json());

// Endpoint to handle form submission
app.post('/send-email', (req, res) => {
  const { name, email, number, message } = req.body;

  // Create a Nodemailer transporter using your SMTP details
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password'
    }
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'destination-email@example.com',
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}\n
      Email: ${email}\n
      Phone Number: ${number}\n
      Message: ${message}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error: Unable to send email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Set the server to listen on a specific port
const PORT = 5000; // Change this to your desired port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
