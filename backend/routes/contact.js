const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Message = require('../models/Message');

router.post('/', async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // 1. Save to MongoDB (Existing logic)
    const newMessage = new Message({ name, email, msg });
    await newMessage.save();

    // 2. Setup Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3. Define the Email Content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'mohitvijaygupta17@gmail.com', // Where you want to receive the alert
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
            ${msg}
          </div>
        </div>
      `,
    };

    // 4. Send the Email
    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: "Message saved and Email sent!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;