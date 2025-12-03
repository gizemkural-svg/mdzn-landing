/*
================================================================================
📧 EMAIL API ENDPOINT EXAMPLE
================================================================================

This is an example backend API endpoint for handling form submissions.
You can use this with Node.js/Express, or adapt it to your preferred backend.

SETUP INSTRUCTIONS:
1. Install dependencies:
   npm install express nodemailer cors dotenv

2. Create a .env file with your email configuration:
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_TO=gizem.kural@onedio.com

3. Run the server:
   node api-example.js

4. Update the fetch URL in App.jsx to point to your server:
   const response = await fetch('http://localhost:3000/api/send-email', {
     ...
   });

================================================================================
*/

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Create email transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: process.env.EMAIL_PORT || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Use App Password for Gmail
  },
});

// Email endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { to, subject, body, replyTo, formData } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to || process.env.EMAIL_TO || 'gizem.kural@onedio.com',
      replyTo: replyTo || formData?.email,
      subject: subject || 'Yeni Form Gönderimi',
      text: body,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">${subject}</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 5px; margin-top: 20px;">
            <pre style="white-space: pre-wrap; font-family: Arial, sans-serif;">${body}</pre>
          </div>
          <p style="margin-top: 20px; color: #666; font-size: 12px;">
            Bu e-posta MDZN Landing Page formundan otomatik olarak gönderilmiştir.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Email başarıyla gönderildi' 
    });
  } catch (error) {
    console.error('Email gönderme hatası:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Email gönderilemedi', 
      error: error.message 
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Email API server running on port ${PORT}`);
  console.log(`Endpoint: http://localhost:${PORT}/api/send-email`);
});

