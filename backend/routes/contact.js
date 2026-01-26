const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Message = require('../models/Message');

router.post('/', async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // 1. Save to MongoDB first
    const newMessage = new Message({ name, email, msg });
    await newMessage.save();

    // 2. Setup Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'mohitvijaygupta17@gmail.com',
      subject: `Portfolio Message: ${name}`,
      text: `From: ${name} (${email})\n\nMessage: ${msg}`
    };

    // 3. Send Email (with a small delay to prevent hanging)
    transporter.sendMail(mailOptions).catch(err => console.log("Email failed but DB saved:", err));

    // 4. Return success immediately so the frontend clears
    return res.status(200).json({ success: true, message: "Received!" });

  } catch (err) {
    console.error("Critical Error:", err);
    if (!res.headersSent) {
      return res.status(500).json({ error: "Server encountered an error" });
    }
  }
});

module.exports = router;