const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Message = require('../models/Message');

router.post('/', async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    const newMessage = new Message({ name, email, msg });
    await newMessage.save();

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

    await transporter.sendMail(mailOptions);

    // This line tells the frontend to stop "Sending..."
    return res.status(200).json({ success: true, message: "Message sent!" });

  } catch (err) {
    console.error(err);
    // If this fails, the frontend shows an error alert
    return res.status(500).json({ success: false, error: "Server error" });
  }
});

module.exports = router;