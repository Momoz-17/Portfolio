const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Message = require('../models/Message');

router.post('/', async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // 1. SAVE TO DATABASE (Always do this first)
    const newMessage = new Message({ name, email, msg });
    await newMessage.save();

    // 2. SETUP EMAIL TRANSPORTER
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'mohitvijaygupta17@gmail.com',
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${msg}`
    };

    // 3. SEND EMAIL ASYNCHRONOUSLY
    // We don't use 'await' here so the response to the browser isn't delayed
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Email Error but DB saved:", error);
      } else {
        console.log("Email sent successfully");
      }
    });

    // 4. SEND SUCCESS TO BROWSER IMMEDIATELY
    return res.status(200).json({ success: true, message: "Success" });

  } catch (err) {
    console.error("Database Error:", err);
    if (!res.headersSent) {
      return res.status(500).json({ error: "Server error" });
    }
  }
});

module.exports = router;